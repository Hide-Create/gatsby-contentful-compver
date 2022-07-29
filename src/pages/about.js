import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faPaperPlane, faBoxOpen } from "@fortawesome/free-solid-svg-icons"

import Seo from "../components/seo"

const About = ({ location }) => {
    return (
        <Layout>
            <Seo
                pagetitle="このサイトについて"
                pagedesc="小谷英彰のブログサイト/アウトサイダーに関する情報を発信しているサイトです。"
                pagepath={location.pathname}
            />
            <div>
                <div classname="stack" style={{ "marginTop": "10rem" }}>
                    <StaticImage
                        src="../images/aboutpage.jpeg"
                        alt="雌阿寒岳頂上付近、挟まった岩"
                        placeholder="blurred"
                    />
                    <p style={{ "textAlign": "center" }} >雌阿寒岳頂上付近にて。嘘みたいなバランスで挟まっていた岩</p>
                </div>
            </div>
            <article className="center">
                <h1 className="bar">HIDDEN OUTSIDERについて</h1>
                <div className="postbody">
                    <p>
                        当サイトは管理人である小谷英彰のポートフォリオサト兼ブログサイトです。トップページに制作したものを載せています。ブログではプログラミングや趣味に関する情報をまとめています。
                    </p>
                    <h2>
                        <FontAwesomeIcon icon={faBoxOpen} />
                        公開している記事
                    </h2>
                    <p>
                        次のような記事を投稿しています。
                    </p>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckSquare} />JavaScriptを主としたプログラミングに関する情報</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} />執筆活動や彫刻、競技ヨーヨー、音楽、デザインなどの趣味の情報</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} />アウトサイダーに関する情報や見解</li>
                    </ul>
                    <h2>
                        <FontAwesomeIcon icon={faPaperPlane} />
                        コンタクト
                    </h2>
                    <p>
                        現在コンタクトページを作成中ですので、下記メールアドレスよりお問い合わせをお願いいたします。12時間以内に返信させていただきますが、内容によって返信に時間がかかる場合はその旨をお伝えするメールを送信させていただきます。
                    </p>
                    <p style={{ "textAlign": "center" }} >hide9230ppia@gmail.com</p>
                    <p>簡単なご質問やリクエストはTwitterのDMを解放しておりますのでそちらからでもかまいません。</p>
                </div>
            </article>
        </Layout>
    );
}

export default About
