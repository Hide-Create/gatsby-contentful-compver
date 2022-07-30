import React, { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const usePage = () => {
    const paraRef1 = useRef(null);
    useEffect(() => {
        const el = paraRef1.current;
        gsap.fromTo(el, { x: 500 },{x:0}, {
            scrollTrigger: {
                trigger: el,
            },
        })
    }, [])

    const paraRef2 = useRef(null);
    useEffect(() => {
        const el = paraRef2.current;
        gsap.fromTo(el, { rotation: 0 }, {
            rotation: -45, duration: 3, scrollTrigger: {
                trigger: el,
                start: 'bottom top+=100',
                end: 'bottom+=500 center',
                scrub: 'true',
            },
        })
    }, [])

    const paraRef3 = useRef(null);
    useEffect(() => {
        const el = paraRef3.current;
        gsap.fromTo(el, { rotation: 0 }, {
            rotation: 45, scrollTrigger: {
                trigger: el,
                start: 'bottom top+=100',
                end: 'bottom+=500 center',
                scrub: 'true',
            },
        })
    }, [])
    return (
        <>
            <div className="center" style={{"height" : "500px"}}>
                <p>あいうえお</p>
            </div>
            <div className="switcher">
                <div className="box">
                    <p ref={paraRef1} >Lorem ipsum dolor sit amet. Est doloremque nulla quo dolores asperiores et explicabo impedit qui molestiae animi id provident quia. Et voluptas autem ut culpa dignissimos est doloribus ipsam et minus dolorem et itaque odit. Aut itaque consequatur id voluptatem sequi eum perspiciatis aspernatur sed harum veritatis? </p><p>Et sunt doloremque ut eveniet totam eos facilis nisi qui excepturi ipsam in necessitatibus libero vel consequatur aspernatur. Sit ducimus amet non nisi voluptatem et deserunt repellendus! Eos mollitia rerum vel fugiat iusto aut minus obcaecati ut voluptas voluptate rem earum aperiam a enim illum? Non excepturi vero ea explicabo nobis nam deleniti consequatur nam perferendis voluptas vel rerum rerum qui consectetur neque non voluptas iusto. </p><p>Et ipsa itaque et nisi suscipit qui libero excepturi aut reiciendis quos a voluptatem cupiditate vel internos galisum sed harum consequatur. Aut consequatur accusamus et dolorem sunt sed accusantium voluptas. Sit necessitatibus unde et porro nisi et voluptatem consectetur. </p>
                </div>
                <div className="box" style={{ "color": "red" }}>
                    <p ref={paraRef2}>Lorem ipsum dolor sit amet. Sed fugit quia At earum totam eum nobis Quis ad voluptas aliquid sit amet aperiam? Sit tempore voluptatem qui corporis quisquam qui neque quisquam qui praesentium quibusdam. In commodi recusandae ut asperiores Quis et expedita quibusdam. A nobis labore a maxime tempore qui dolorem quae sit maiores praesentium eum sint cupiditate ut sunt internos ea dolorem asperiores!Lorem ipsum dolor sit amet. Sed fugit quia At earum totam eum nobis Quis ad voluptas aliquid sit amet aperiam? Sit tempore voluptatem qui corporis quisquam qui neque quisquam qui praesentium quibusdam. In commodi recusandae ut asperiores Quis et expedita quibusdam. A nobis labore a maxime tempore qui dolorem quae sit maiores praesentium eum sint cupiditate ut sunt internos ea dolorem asperiores!Lorem ipsum dolor sit amet. Sed fugit quia At earum totam eum nobis Quis ad voluptas aliquid sit amet aperiam? Sit tempore voluptatem qui corporis quisquam qui neque quisquam qui praesentium quibusdam. In commodi recusandae ut asperiores Quis et expedita quibusdam. A nobis labore a maxime tempore qui dolorem quae sit maiores praesentium eum sint cupiditate ut sunt internos ea dolorem asperiores!</p>
                </div>
                <div className="box" style={{ "color": "blue" }}>
                    <p ref={paraRef3}>Lorem ipsum dolor sit amet. Sed fugit quia At earum totam eum nobis Quis ad voluptas aliquid sit amet aperiam? Sit tempore voluptatem qui corporis quisquam qui neque quisquam qui praesentium quibusdam. In commodi recusandae ut asperiores Quis et expedita quibusdam. A nobis labore a maxime tempore qui dolorem quae sit maiores praesentium eum sint cupiditate ut sunt internos ea dolorem asperiores!Lorem ipsum dolor sit amet. Sed fugit quia At earum totam eum nobis Quis ad voluptas aliquid sit amet aperiam? Sit tempore voluptatem qui corporis quisquam qui neque quisquam qui praesentium quibusdam. In commodi recusandae ut asperiores Quis et expedita quibusdam. A nobis labore a maxime tempore qui dolorem quae sit maiores praesentium eum sint cupiditate ut sunt internos ea dolorem asperiores!Lorem ipsum dolor sit amet. Sed fugit quia At earum totam eum nobis Quis ad voluptas aliquid sit amet aperiam? Sit tempore voluptatem qui corporis quisquam qui neque quisquam qui praesentium quibusdam. In commodi recusandae ut asperiores Quis et expedita quibusdam. A nobis labore a maxime tempore qui dolorem quae sit maiores praesentium eum sint cupiditate ut sunt internos ea dolorem asperiores!</p>
                </div>
            </div>
        </>
    );
};

export default usePage;