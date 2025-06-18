// 外部のファイルを一切読み込まない、非常にシンプルなテストコードです。

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div
      style={{
        padding: "2rem",
        color: "white",
        background: "black",
        fontFamily: "sans-serif",
      }}
    >
      <h1>テストページ</h1>
      <h2>Project ID: {params.id}</h2>
      <hr />
      <p>このページが表示されれば、ビルドは成功しています。</p>
      <p>
        ビルドが成功した場合、エラーの原因は元のコードが読み込んでいた
        `projects.ts` や `NeonBackground.tsx` にあることがわかります。
      </p>
      <p>
        もしこのシンプルなコードでもビルドが失敗する場合、原因は `package.json`
        や `tsconfig.json`
        といったプロジェクト全体の設定ファイルにある可能性が非常に高いです。
      </p>
    </div>
  );
}
