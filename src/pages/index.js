import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"
import Image from 'next/image'
import Avatar from '../public/avatar.png'
import Cards from '../components/Cards'
import HTML from '../public/html.svg'
import CSS from '../public/css.svg'
import JS from '../public/js.svg'
import Bootstrap from '../public/bootstrap.svg'
import Tailwind from '../public/tailwind.svg'
import ReactJS from '../public/react.svg'
import Express from '../public/express.svg'
import NodeJS from '../public/nodejs.svg'
import MySql from '../public/mysql.svg'
import MongoDb from '../public/mongodb.svg'
import { useState } from 'react'

export default function Home() {
  const knowledge = [
    {
      id: 0,
      name: "HTML",
      imageUrl: HTML
    },
    {
      id: 1,
      name: "CSS",
      imageUrl: CSS
    },
    {
      id: 2,
      name: "JavaScript",
      imageUrl: JS
    }, {
      id: 3,
      name: "Bootstrap",
      imageUrl: Bootstrap
    }, {
      id: 4,
      name: "Tailwind",
      imageUrl: Tailwind
    },
    {
      id: 5,
      name: "ReactJS",
      imageUrl: ReactJS
    }, {
      id: 6,
      name: "NodeJS",
      imageUrl: NodeJS

    }, {
      id: 7,
      name: "ExpressJS",
      imageUrl: Express
    }, {
      id: 8,
      name: "MySql",
      imageUrl: MySql
    }, {
      id: 9,
      name: "MongoDb",
      imageUrl: MongoDb
    }
  ]
  const[darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark": "" } >
      <Head>
        <title>Anfal Ibrahim | Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white dark:bg-gray-500 ' data-theme={darkMode ? "night" : "retro"}>
        <nav className='py-10 px-10 mb-12 flex justify-between items-center w-full shadow-lg '>
          <h1 className='text-xl font-sunny'>
            Anfal Ibrahim | Web Dev
          </h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)} />
            </li>
            <li>
              <a href='#' className=' bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ml-6'>Resume</a>
            </li>
          </ul>
        </nav>
        <section className='px-6 md:py-10'>
          <div className='flex flex-col md:flex-row' >
            {/*Hero Section */}
            <section className='min-h-max '>

              <div className='text-center p-10 '>
                <h2 className='text-3xl p-2 font-medium md:text-4xl text-emerald-400 dark:text-green-300 '>Anfal Ibrahim</h2>
                <h3 className='text-2xl p-2'>
                  Web Developer
                </h3>
                <p className='text-md py-5 leading-2 text-slate-600 dark:text-[#b4c6ef]  md:text-lg'>
                  &quot;When you feel like giving up, remember why you started.&quot;
                </p>
              </div>
              <div className='text-5xl flex justify-center gap-8 text-slate-600 py-3 dark:text-[#b4c6ef]'>
                <a href='#' className='cursor-pointer'>
                  <AiFillGithub />
                </a>
                <a href='#' className='cursor-pointer'>
                  <AiFillLinkedin />
                </a>
                <a href='#' className='cursor-pointer'>
                  <AiFillTwitterCircle />
                </a>
              </div>
            </section>
            {/*end */}
            {/*About Section */}
            <section className='md:w-2/4'>
              <div className='text-center my-10 md:text-left md:px-10 '>
                <h3 className='text-2xl p-2 md:text-4xl'>
                  About me
                </h3>
                <div>
                  <p className='text-md md:text-lg py-5 leading-2 text-slate-600 dark:text-[#b4c6ef]'>
                  As a web developer, I have skills in designing, developing and maintaining responsive and interactive websites. I am skilled in programming languages such as HTML, CSS and JavaScript and have knowledge in web frameworks such as React.
                </p>
                  <p className='text-md md:text-lg py-5 leading-2 text-slate-600 dark:text-[#b4c6ef]'>
                  Apart from that, I am also familiar with managing databases and using server-side programming languages such as Node.js. I always pay attention to website security and performance and put a high priority on a good user experience.
                </p>

                </div>
              </div>
            </section>
            <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 mx-auto overflow-hidden'>
              <Image src={Avatar} alt='avatar' layout='fill' priority objectFit='cover' />
            </div>
            {/*end*/}

          </div>
          {/*Knowledge */}
          <section >
            <h3 className='text-center my-20  p-5 text-2xl md:text-4xl'>
              My Knowledge
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-center '>

              {
                knowledge.map((el) => {
                  return (
                    <div key={el.id}>
                      <Cards data={el} />
                    </div>
                  )
                })
              }
            </div>
          </section>
          {/*end*/}
          {/*Portofolio Section */}
          <section>
            <div className='text-center my-10'>
              <h3 className='text-2xl md:text-4xl'>
                Portofolio
              </h3>
            </div>
          </section>
          {/*end */}
          {/*Contact Section */}
          <section className='flex justify-center items-center my-10'>
            <form className="flex w-full max-w-sm space-x-3">
              <div className="w-full border max-w-2xl px-5 py-5 m-auto mt-10 bg-white rounded-lg glass dark:bg-gray-800">
                <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                  Contact us !
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <input type="text" id="contact-form-name" className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <input type="text" id="contact-form-email" className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="text-gray-700" htmlFor="name">
                      <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows={5} cols={40} defaultValue={"                            "} />
                    </label>
                  </div>
                  <div className="col-span-2 text-right">
                    <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
          {/*end */}

        </section>
        {/*Footer */}
        <footer className="footer items-center p-4 bg-neutral text-neutral-content ">
          <div className="items-center grid-flow-col">
            <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </footer>
        {/*end */}
      </main>
    </div>
  )
}
