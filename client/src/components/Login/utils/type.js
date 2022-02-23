// import React, { Component, createRef } from "react";
// import { delay, propTypeValidation, contentInView } from "./utils";
// import "./app.css";

// class TypeWriterEffect extends Component {
//   state = {
//     text: "",
//     blink: false,
//     hideCursor: true,
//     animate: false,
//     typeSpeedDelay: null,
//     multiTextDelay: null,
//     eraseSpeedDelay: null,
//     startDelay: null,
//     scrollAreaIsSet: null,
//     multiTextLoop: false,
//   };

//   myRef = createRef();

//   class delay {
//   constructor(time) {
//     this.time = time;
//     this.timeout = null;
//     this.close = null;
//   }

//   getPromise() {
//     return new Promise((resolve, reject) => {
//       this.close = reject;
//       this.timeout = setTimeout(() => {
//         resolve();
//       }, this.time);
//     });
//   }
//   cancel() {
//     this.timeout && clearTimeout(this.timeout);
//     this.close && this.close('unmounted');
//     return { isCanceled: true };
//   }
// }

//   multiTextDisplay = async (arr) => {
//     for (let e = 0; e < arr.length; e++) {
//       await this.runAnimation(arr[e], arr.length - e - 1);
//     }
//     if (this.props.multiTextLoop) {
//       await this.eraseText(arr[arr.length - 1]);
//       this.multiTextDisplay(arr);
//     }
//   };

//   runAnimation = async (str, erase) => {
//     const textArr = typeof str == "string" && str.trim().split("");
//     if (textArr) {
//       this.setState({
//         blink: false,
//       });

//       let text = "";
//       const typeSpeedDelay = new delay(this.props.typeSpeed || 120);
//       const multiTextDelay = this.props.multiText && new delay(this.props.multiTextDelay || 2000);

//       this.setState({
//         typeSpeedDelay,
//         multiTextDelay,
//       });

//       for (let char = 0; char < textArr.length; char++) {
//         await typeSpeedDelay.getPromise();
//         text += textArr[char];
//         this.setState({
//           text,
//         });
//       }

//       this.setState({
//         blink: true,
//       });
//       this.props.multiText && (await multiTextDelay.getPromise());
//       erase > 0 && (await this.eraseText(text));
//     }
//   };

//   componentDidUpdate() {
//     if (!this.state.scrollAreaIsSet) {
//       this.setState({ scrollAreaIsSet: true });
//       this.props.scrollArea && typeof this.props.scrollArea == "object"
//         ? this.props.scrollArea.addEventListener("scroll", this.animateOnScroll)
//         : document.addEventListener("scroll", this.animateOnScroll);
//     }
//   }

//   render() {
//     return (
//       <div ref={this.myRef} className={"react-typewriter-text-wrap"}>
//         <h1 style={{ ...this.props.textStyle }} className="react-typewriter-text">
//           {this.state.text}
//           <div
//             className={`react-typewriter-pointer ${this.state.blink && "add-cursor-animate"} ${
//               this.state.hideCursor ? "hide-typing-cursor" : ""
//             }`}
//             style={{ backgroundColor: `${this.props.cursorColor}` }}
//           ></div>
//         </h1>
//       </div>
//     );
//   }
// }

// TypeWriterEffect.propTypes = propTypeValidation;
