// 发布/订阅简单实现
// 主要是解决Token并发失效问题
export default function pubSub() {
  let listeners: Array<() => void> = [];

  const subscribe = (listener: () => void) => {
    listeners.push(listener);
  };

  const dispatch = () => {
    listeners.forEach((cb) => cb());
    listeners = [];
  };

  return {
    subscribe,
    dispatch,
  };
}
