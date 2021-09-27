import { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Edit todo item</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl my-6">Edit Todo item</h1>
        <div className="w-full flex justify-center">
          <form className="w-5/12" onSubmit={{}}>
            <div className="flex flex-row">
              <input
                type="text"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={{}}
                onChange={{}}
              ></input>
              <button className="text-white bg-green-500 hover:bg-green-700 font-bold border-0 py-2 px-8 mx-4 focus:outline-none rounded text-lg">
                Add
              </button>
              <button className="text-white bg-red-500 hover:bg-red-700 font-bold border-0 py-2 px-8 focus:outline-none rounded text-lg">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}