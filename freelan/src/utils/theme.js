// ! valiable
// const sunBtn = document.querySelector(".sun");
// const moonBtn = document.querySelector(".moon");
// const switchThemeBtn = document.querySelectorAll(".switch-theme");

// ! function
// function iconSwitch(theme) {
//   if (theme == "light") {
//     moonBtn.classList.add("hidden");
//     sunBtn.classList.remove("hidden");
//   } else {
//     moonBtn.classList.remove("hidden");
//     sunBtn.classList.add("hidden");
//   }
// }

// ! first state
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

// const themeUser = localStorage.getItem("theme");
// const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const themeProgramer = document.documentElement.classList.value;

// if (themeUser == "light" || themeProgramer == "light") {
//   document.documentElement.classList.add("light");
//   document.documentElement.classList.remove("dark");
//   iconSwitch("light");
// }
// if (themeUser == "dark" || themeProgramer == "dark") {
//   document.documentElement.classList.add("dark");
//   document.documentElement.classList.remove("light");
//   iconSwitch("dark");
// }

// ! hand
// switchThemeBtn.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     const theme = e.target.dataset.theme;

//     switch (theme) {
//       case "light": {
//         document.documentElement.classList.add("light");
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         iconSwitch("light");
//         break;
//       }

//       case "dark": {
//         document.documentElement.classList.add("dark");
//         document.documentElement.classList.remove("light");
//         localStorage.setItem("theme", "dark");
//         iconSwitch("dark");
//         break;
//       }

//       case "system": {
//         localStorage.removeItem("theme");
//         if (themeSystem) {
//           // themeSystem ==> dark
//           document.documentElement.classList.add("dark");
//           document.documentElement.classList.remove("light");
//           iconSwitch("dark");
//         } else {
//           // themeSystem ==> light
//           document.documentElement.classList.add("light");
//           document.documentElement.classList.remove("dark");
//           iconSwitch("light");
//         }
//         break;
//       }

//       default:
//         break;
//     }
//   });
// });

// window.matchMedia("(prefers-color-scheme: dark)").matches => true => dark
// window.matchMedia("(prefers-color-scheme: dark)").matches => false => light

// function closeOutsideModal() {
//   window.onclick = function (event) {
//     console.log(event.target.className);
//   };
// }

// closeOutsideModal()

function theme(open) {
  const sunBtn = document.querySelector(".sun");
  const moonBtn = document.querySelector(".moon");

  console.log(sunBtn);
  console.log(moonBtn);

  
  // function iconSwitch(theme) {
  //   if (theme == "light") {
  //     moonBtn.classList.add("hidden");
  //     sunBtn.classList.remove("hidden");
  //   } else {
  //     moonBtn.classList.remove("hidden");
  //     sunBtn.classList.add("hidden");
  //   }
  // }

  // const themeUser = localStorage.getItem("theme");
  // const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const themeProgramer = document.documentElement.classList.value;

  // if (themeUser == "light" || themeProgramer == "light") {
  //   document.documentElement.classList.add("light");
  //   document.documentElement.classList.remove("dark");
  //   iconSwitch("light");
  // }
  // if (themeUser == "dark" || themeProgramer == "dark") {
  //   document.documentElement.classList.add("dark");
  //   document.documentElement.classList.remove("light");
  //   iconSwitch("dark");
  // }

  // if (open) {
  //   document.documentElement.classList.add("light");
  //   document.documentElement.classList.remove("dark");
  //   localStorage.setItem("theme", "light");
  //   iconSwitch("light");
  // } else {
  //   document.documentElement.classList.add("dark");
  //   document.documentElement.classList.remove("light");
  //   localStorage.setItem("theme", "dark");
  //   iconSwitch("dark");
  // }
}

export default theme;
