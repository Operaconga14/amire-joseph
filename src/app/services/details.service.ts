import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  public companies: any;

  constructor() { }

  featureProject = [
    {
      name: 'Zswap',
      description: ` Zswap is a decentralized application (dApp) built for seamless swapping of multi-chain and EVM-compatible tokens. Developed using Angular for a user-friendly and responsive frontend experience, and Solidity (Hardhat) for secure and robust smart contracts on the backend.`,
      icon: 'bi bi-filetype-js'
    },
    {
      name: 'Zsales',
      description: ` Zsales is a user-friendly platform designed to streamline the creation of presales and launchpads for EVM-compatible tokens. Built with a powerful combination of Angular for the frontend and Solidity (Hardhat) for the backend smart contracts, Zsales empowers projects to raise capital securely and transparently.`,
      icon: 'bi bi-browser-chrome'
    },
    {
      name: 'Zarpay',
      description: ` Zarpay is a revolutionary platform that simplifies the creation of online stores and empowers them to accept payments in EVM-compatible cryptocurrencies. Built with a user-friendly interface (Angular frontend) and secure smart contracts (Solidity with Hardhat), Zarpay provides a seamless experience for both store owners and customers.Zsales is a user-friendly platform designed to streamline the creation of presales and launchpads for EVM-compatible tokens. Built with a powerful combination of Angular for the frontend and Solidity (Hardhat) for the backend smart contracts, Zsales empowers projects to raise capital securely and transparently.`,
      icon: 'bi bi-shop'
    }
  ]

  personalProject = [
    {
      name: 'Color Gen-File',
      description: `Color Gen-Fil is a Node.js command-line interface (CLI) tool that empowers you to generate custom color palettes and seamlessly integrate them into your web development projects.`,
      img: "https://i.ibb.co/wh2MGqh/color-gen.png"
    },
    {
      name: 'Qr Code Generator',
      description: `Say hello to Qr Code Generator, your one-stop shop for creating and customizing QR codes! This user-friendly tool allows you to effortlessly transform any piece of information, whether it be a name, number, link, or even a symbol, into a scannable QR code. But that's not all - unleash your creativity and personalize your QR codes to perfectly match your needs and style.`,
      img: "https://i.ibb.co/CMGyHDM/qr-Code-Gen.png"
    }
  ]

  company = [
    {
      name: 'Zarclays',
      role: 'Full-Stack Developer',
      years: 'September 2021 - Present',
      details: `Built and maintained web applications (ZSwap, Zsale, Zarpay) using Angular (frontend) and Solidity (Hardhat) (backend/smart contracts).
Ensured secure and functional smart contract development for ZSwap, Zsale, and Zarpay.`
    },
    {
      name: 'Heirtrust',
      role: 'Full-Stack Developer',
      years: 'September 2022 - Present',
      details: `Developed and maintained secure web applications for managing wills and testaments, including file storage and cryptocurrency inheritance for next of kin.
Utilized Angular for a user-friendly and responsive frontend experience.
Implemented secure and robust smart contracts using Solidity (Hardhat) to facilitate secure file storage and crypto inheritance functionalities.`
    },
    {
      name: 'Askit',
      role: 'Coding Tutor and Web Desiner',
      years: 'August 2021 - 2022',
      details: `Developed engaging and educational applications for children using Scratch, a beginner-friendly programming language.
Provided website hosting solutions and designed user-friendly interfaces using WordPress.`
    }
  ]

  socials = [
    {
      name: "Github",
      url: "https://github.com/Operaconga14",
      icon: "bi bi-bricks"
    },
    {
      name: "Linkedin",
      url: "https://github.com/Operaconga14",
      icon: "bi bi-bricks"
    },
    {
      name: "Gmail",
      url: "mailto:amirejoseph83@gmail.com",
      icon: "bi bi-bricks"
    }
  ]



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

}
