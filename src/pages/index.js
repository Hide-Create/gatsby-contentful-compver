import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/deco.module.css"

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <section>
        <div className="box" style={{ "textAlign": "center" }}>
          <h2 className={styles.sentenceTextShadow}>About me & this site</h2>
        </div>
        <div className="with-sidebar">
          <div className={`box ${styles.boxShadow}`}>
            <div className="stack">
              <div className="frame">
                <StaticImage
                  src="../images/myphoto.JPG"
                  alt="自己紹介画像"
                  placeholder="blurred"
                  aspectRatio={3/4}
                  height={300}
                />
              </div>
              <h3>Hi! I'm Hideaki Kotani!</h3>
              <p>1999年生まれの人間です。</p>
              <p>一癖も二癖もあるWEBサイトを作るのが好きです。最近はWORDPRESSの他、Gatsby.JS+ヘッドレスCMSの組み合わせにハマっています。それ以外は小説を書いたりスパイスカレーを作ったり石を削ったりヨーヨーしたりしてます。</p>
              <p>↓進行中プロジェクト↓</p>
              <p>Next.JS + microCMS + Framer Motion [site]</p>
              <p>React + Three.JS [interactive animation]</p>
            </div>
          </div>
          <div className="box">
            <dl className="stack">
              <h2 className={styles.sentenceTextShadow} style={{ "fontFamily": "'Zen Maru Gothic', sans-serif" }} >主要技術スタック</h2>
              <dt>Gatsby.JS</dt>
              <dd>JSXによるマークアップ、GraphQLによるCMSとの連携、動的ページ生成などの処理</dd>
              <dt>CSS</dt>
              <dd>プレーンなCSSでレイアウトプリミティブを設計、CSS Modulesから装飾</dd>
              <dt>tsParticles</dt>
              <dd>インタラクティブな背景アニメーションの作成</dd>
              <dt>Netlify</dt>
              <dd>GitHubリポジトリからのビルド、デプロイ</dd>
              <dt>Contentful</dt>
              <dd>ブログや画像関連のコンテンツ管理</dd>
            </dl>
            <div style={{ "marginTop": "2rem" }}>
              <h3>サイトのこだわり</h3>
              <p>Thanks for coming my web site!!</p>
              <p>このサイトはわたくし小谷英彰のポートフォリオサイト兼ブログサイトとなっております。
              </p>
              <p>CSSによるメディアクエリは使用せずにレスポンシブデザインとなるように設計をしています。背景として設定している雪が降るようなアニメーションはただその動きのみでなく、ホバーによるパララックス効果やクリックすると雪が拡散するようなアニメーションも仕掛けています。</p>
            </div>
          </div>
        </div>
      </section>
      <div className="with-sidebar">
        <div className="box" style={{ "textAlign": "center" }}>
          <h2 className={styles.sentenceTextShadow} style={{ "fontFamily": "'Zen Maru Gothic', sans-serif" }} >主なブログの内容</h2>
          <ul className="stack">
            <li style={{ "fontSize": "1.2rem" }}><span>→</span>WEBサイト制作に関わる技術的なコンテンツ</li>
            <li style={{ "fontSize": "1.2rem" }}><span>→</span>読んだ本の書評</li>
            <li style={{ "fontSize": "1.2rem" }}><span>→</span>アウトサイダーに関する考察</li>
            <li style={{ "fontSize": "1.2rem" }}><span>→</span>その他日常で触れる様々な事象に関する考察</li>
          </ul>
        </div>
        <div className="box" style={{"textAlign":"center"}}>
          <h2 className={styles.normalTextShadow}>Recent Posts</h2>
          <div className={`grid ${styles.boxShadowBlue}`}>
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <article className="box" style={{ "margin": "0" }} key={node.id}>
                <Link to={`/blog/post/${node.slug}/`}>
                  <div className="frame">
                    <GatsbyImage
                      image={node.eyecatch.gatsbyImageData}
                      alt={node.eyecatch.description}
                      aspectRatio={16 / 9}
                    />
                  </div>
                  <p style={{ "textAlign": "center" }}>{node.title}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="cover stack" style={{"minHeight":"70vh","borderTop":"0.1rem solid #fff","borderBottom":"0.1rem solid #fff"}}>
        <p>画面内を</p>
        <p className={styles.textAnimation} style={{"fontSize":"2rem"}} >Click or Tap</p>
        <p>してみてね！</p>
      </div>
      <div className="box">
        <div className="stack" >
          <h2 className={styles.sentenceTextShadow} style={{ "textAlign": "center", "fontFamily": "'Zen Maru Gothic', sans-serif" }}>制作サイト / アプリケーション / アニメーション</h2>
          <div className="switcher">
            <Link to="https://www.hideakikotani.com/" target="_blank" rel="noopener noreferrer" >
              <h3>WORDPRESS Site</h3>
              <div className={`frame animecompo`} >
                <StaticImage
                  src="../images/siteexample01.png"
                  alt="wordpressサイト"
                  placeholder="blurred"
                  aspectRatio={16 / 9}
                />
              </div>
              <p>使用技術</p>
              <p>HTML / CSS / jQuey / PHP</p>
            </Link>
            <Link to="https://golden-cascaron-24c733.netlify.app/" target="_blank" rel="noopener noreferrer">
              <h3>world weather App</h3>
              <div className="frame">
                <StaticImage
                  src="../images/siteexample02.png"
                  alt="TypeScriptWeatherApp"
                  placeholder="blurred"
                  aspectRatio={16 / 9}
                />
              </div>
              <p>使用技術</p>
              <p>React / TypeScript / weather API</p>
            </Link>
            <Link to="https://codepen.io/hide-create/pen/xxLKOoE?editors=1100" target="_blank" rel="noopener noreferrer">
              <h3>CSS Rotating cube</h3>
              <div className="frame">
                <StaticImage
                  src="../images/siteexample03.png"
                  alt="TypeScriptWeatherApp"
                  placeholder="blurred"
                  aspectRatio={16 / 9}
                />
              </div>
              <p>使用技術</p>
              <p>CSS</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 4
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            gatsbyImageData(aspectRatio:1.78,width:200)
            description
          }
        }
      }
    }
  }
`

export default Home
