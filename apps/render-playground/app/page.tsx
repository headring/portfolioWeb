"use client";
import { memo, useState } from "react";

const InnerComponent = (props: any) => {
  const { count } = props;
  if (count) {
    return <div>has count InnerComponent{count} counting</div>;
  }
  return <div>inner InnerComponent</div>;
};

const MemoComponent1 = memo(() => {
  console.log("no props");
  return <div>non memo</div>;
});

const MemoComponent2 = memo((props: { memoCount: number }) => {
  console.log("here");
  return <div>counting memo: {props.memoCount}</div>;
});

function Home(props: any) {
  const [count, setCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  return (
    <div>
      <div>render-playground - devtools render check</div>
      <ul>
        devtools의 render는 Render Phase를 의미. 자신의 상태가 변경되거나,
        props가 변경되거나, 부모가 변경되어서 하위값들이 render phase 진입
      </ul>
      <div>count: {count}</div>
      <div>memoCount: {memoCount}</div>
      <div onClick={() => setMemoCount((prev) => prev + 1)}>memo updater</div>
      <div onClick={() => setCount((prev) => prev + 1)}>click</div>
      <div>
        <InnerComponent count={count} />
      </div>
      <MemoComponent1 />
      <MemoComponent2 memoCount={memoCount} />
      <div>{props.children}</div>
    </div>
  );
}
export default function PageHome() {
  const [hoeme] = useState("home");
  return (
    <Home>
      여기는 children {hoeme} <InnerComponent />{" "}
    </Home>
  );
}
