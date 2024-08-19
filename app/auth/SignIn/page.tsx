import { Header } from "@/app/component/Header";

export default function SignIn() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-1 pt-36 px-8 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Welcome to Simpro</h1>
          <p className="mt-4">ここにメインコンテンツが表示されます。</p>
        </div>
      </main>
    </div>
  );
}
