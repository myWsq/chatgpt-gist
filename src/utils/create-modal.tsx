import { useRouter } from "next/router";
import { produce } from "immer";
import { atom, useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";

export type ModalDefine<T> = (
  control: ModalControlProps,
  props: T
) => React.ReactElement | null;

export interface ModalOptions {
  destroyOnRouterChange: boolean;
  keepAlive: boolean;
}

export interface ModalHandler<T> {
  open(props: T, options?: Partial<ModalOptions>): void;
  close(): void;
}

export interface ModalComponent<T>
  extends React.FunctionComponent<ModalControlProps & T> {
  useHandler(): ModalHandler<T>;
}

const Modals = atom<
  {
    component: ModalComponent<any>;
    visible: boolean;
    props: any;
    options: ModalOptions;
  }[]
>([]);

export const ModalRenderer: React.FunctionComponent = () => {
  const [modals, setModals] = useAtom(Modals);

  const router = useRouter();

  // when router change, destroy modals
  useEffect(() => {
    setModals((d) => d.filter((item) => !item.options.destroyOnRouterChange));
  }, [router, setModals]);

  return (
    <>
      {modals.map((item, i) => (
        <item.component
          key={i}
          {...item.props}
          visible={item.visible}
          onClose={(): void => {
            setModals(
              produce((d) => {
                d[i].visible = false;
              })
            );
          }}
          afterClose={(): void => {
            if (!item.options.keepAlive) {
              setModals(
                produce((d) => {
                  d.splice(i, 1);
                })
              );
            }
          }}
        />
      ))}
    </>
  );
};

export interface ModalControlProps {
  visible?: boolean;
  onClose?(): void;
  afterClose?(): void;
}

export function createModal<T = void>(
  Component: ModalDefine<T>
): ModalComponent<T> {
  const component: ModalComponent<T> = (props) => Component(props, props);

  function useHandler(): ModalHandler<T> {
    const setModals = useSetAtom(Modals);

    const open: ModalHandler<T>["open"] = (props, _options) => {
      const options: ModalOptions = {
        destroyOnRouterChange: true,
        keepAlive: false,
        ..._options,
      };

      setModals(
        produce((d) => {
          const index = d.findIndex((item) => item.component === component);
          if (index > -1) {
            d[index].visible = true;
            d[index].props = props;
            d[index].options = options;
          } else {
            d.push({
              visible: true,
              component,
              props,
              options,
            });
          }
        })
      );
    };

    const close: ModalHandler<T>["close"] = () => {
      setModals(
        produce((d) => {
          const index = d.findIndex((item) => item.component === component);
          if (index > -1) {
            d[index].visible = false;
          }
        })
      );
    };

    return {
      open,
      close,
    };
  }

  component.useHandler = useHandler;
  return component;
}
