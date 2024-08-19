import Main_logo from "@/public/Simplo_gray_main.svg";
import Picture from "@/public/Picture.png";
import Image from "next/image";

import skillData from "@/public/skillData.json";

export function Main() {
  return (
    <main className="flex-grow text-gray-800">
      <section className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <Image
          src={Main_logo}
          alt="Main_logo"
          className="mt-20 w-[700px] mx-auto"
        />
        <h2 className="text-4xl mt-7">simple × programmer</h2>
        <h3 className="text-3xl mt-7">
          『複雑な事柄をシンプルに分かりやすく』
        </h3>
        <p className="text-left text-2xl mt-10 mx-5 w-full max-w-screen-lg">
          こちらは私のポートフォリオをサイトです。
        </p>
        <p className="text-left text-2xl mt-3 mx-5 w-full max-w-screen-lg">
          技術ブログや作品集、スキルを掲示していきます。
        </p>
        <p className="text-left text-2xl mt-3 mx-5 w-full max-w-screen-lg">
          システムやIT技術についてより分かりやすい説明ができるように心がけます。
        </p>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen bg-gray-200">
        <h3 className="text-left text-5xl mb-28 mx-5 w-full max-w-screen-lg">
          portfolio...
        </h3>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <h3 className="text-left text-5xl mb-20 mx-5 w-full max-w-screen-lg">
          profile...
        </h3>
        <h4 className="text-3xl mb-4">taku</h4>
        <div className="flex items-center">
          <Image
            src={Picture} // 画像のパスを指定
            alt="Profile Picture"
            className="w-[200px] h-[200px] rounded-full"
          />
        </div>
        <p className="text-left text-2xl mt-10 mx-5 w-full max-w-screen-lg">
          SI企業にて3年Web開発を経験した後に、ITコンサルに転身した20代後半男性です。
        </p>
        <p className="text-left text-2xl mt-3 mx-5 w-full max-w-screen-lg">
          またWebデザイン〜上流工程まで幅広いIT人材を目指しています。
        </p>
        <p className="text-left text-2xl mt-3 mx-5 w-full max-w-screen-lg">
          将来的には「Simpro」からサービスを提供するのも目標の1つです。
        </p>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen bg-gray-200">
        <h3 className="text-left text-5xl mb-28 mx-5 w-full max-w-screen-lg">
          skill...
        </h3>
        <div className="flex">
          <h4 className="text-left text-2xl my-3 mx-5 w-full max-w-screen-lg text-blue-700">
            design
          </h4>
          <div>
            {skillData.design.map((skill, index) => (
              <li
                key={index}
                className="text-left text-xl mt-3 mx-5 w-full max-w-screen-lg list-none"
              >
                {skill.name}
              </li>
            ))}
          </div>
          <h4 className="text-left text-2xl my-3 mx-5 w-full max-w-screen-lg text-blue-700">
            frontend
          </h4>
          <div>
            {skillData.frontend.map((skill, index) => (
              <li
                key={index}
                className="text-left text-xl mt-3 mx-5 w-full max-w-screen-lg list-none"
              >
                {skill.name}
              </li>
            ))}
          </div>
          <h4 className="text-left text-2xl my-3 mx-5 w-full max-w-screen-lg text-blue-700">
            backend
          </h4>
          <div>
            {skillData.backend.map((skill, index) => (
              <li
                key={index}
                className="text-left text-xl mt-3 mx-5 w-full max-w-screen-lg list-none"
              >
                {skill.name}
              </li>
            ))}
          </div>
          <h4 className="text-left text-2xl my-3 mx-5 w-full max-w-screen-lg text-blue-700">
            infrastructure
          </h4>
          <div>
            {skillData.infrastructure.map((skill, index) => (
              <li
                key={index}
                className="text-left text-xl mt-3 mx-5 w-full max-w-screen-lg list-none"
              >
                {skill.name}
              </li>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
