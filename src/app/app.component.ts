import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';

export class NgPresentation {
  category: string;
  title: string;
  presenter: string;
  shortDesc: string;
  longDesc: string;
  presentation: string;
  video: string;
  links: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {
    //
  }

  setCurrentVideo(video: string): void {
    this.currentVideo = video;
    this.currentVideoLink = this.getEmbedLink('https://www.youtube.com/embed/' + video);
  }

  getEmbedLink(string: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }

  getLink(string: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(string);
  }

  getText(string: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(string);
  }

  private q: string;
  private currentVideo: string;
  private currentVideoLink: SafeResourceUrl;
  private presentations: NgPresentation[] = [{
    category: "Keynote",
    title: "Keynote",
    presenter: "Miško Hevery",
    shortDesc: "This keynote was about the core of ng2 (performance, structure, rendering logic, etc).",
    longDesc: "In the early goals of Angular 2, we focused on creating a full platform that encompasses even more of the needs of our developer community. Mobile is all the rage these of late, but the majority of successful product teams have investment across web, mobile web, installed mobile apps and even installed desktop applications. From individual developers all the way to CIOs, folks would like to reuse both their development expertise and their code across these platforms to deliver quickly and at minimal cost. Please join us for a chat on how we're addressing this full space of development needs in Angular 2.",
    presentation: "",
    video: "wpxnU62mNJ4",
    links: ["https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html"]
  }, {
    category: "Reactive",
    title: "Angular & RxJS",
    presenter: "Rob Wormald",
    shortDesc: "This presentation showed nice examples for Reactive Forms and Reactive Routing.",
    longDesc: "Learn to use reactivity to supercharge your Angular apps using RxJS.",
    presentation: "https://docs.google.com/presentation/d/1Q4raWgWEkhJsPNWD9O_67kIc3PtkwebppqRFhFPKQVE/edit",
    video: "WWR9nxVx1ec",
    links: []
  }, {
    category: "Debug",
    title: "Angular BatScanner",
    presenter: "Douglas Duteil",
    shortDesc: "This presentation was about a “timeline” tool for ng2 environment as Chrome extension.",
    longDesc: "Yet another Angular 2 devtool, Angular BatScanner is focus on performance analysis. Like debugging the performance bottleneck is hard. I made a tool to visualize what is happening for Angular when your application is running. It's similar to Timeline Tool but using the Angular Component vocabulary. By hooking into the components life cycle system we can quickly explore a record to answer : - when, where and why a change happened - how often it's changed - how much time a components took to react to it - etc…",
    presentation: "",
    video: "2DHpmyFWULQ",
    links: ["https://chrome.google.com/webstore/detail/angular-batscanner/gcngciildkejiapchdgpcniflijoiadf", "https://github.com/douglasduteil/angular-batscanner"]
  }, {
    category: "Bootstrap",
    title: "Custom widgets for Angular2? Piece of cake!",
    presenter: "Pawel Kozlowski",
    shortDesc: "This presentation was about ng2-bootstrap with nice code snippets.",
    longDesc: "With the rest of the angular-ui/bootstrap team I've set out recently to migrate Bootstrap widgets to Angular 2. To my delight the resulting https://ng-bootstrap.github.io library offers much better APIs and was significantly easier to write as compared to the Angular 1 counterpart. During this talk I would go over specific patterns and tricks in Angular 2 that makes custom widget development a cakewalk.",
    presentation: "https://pkozlowski-opensource.github.io/ng-europe-2016/#/",
    video: "l8OHU-TEG7g",
    links: ["https://ng-bootstrap.github.io"]
  }, {
    category: "Data",
    title: "Data science with angular",
    presenter: "Ari Lerner",
    shortDesc: "",
    longDesc: "Data is everywhere; it's in our apps,, servers, and all over the internet. It's the backbone for our applications. In this talk, we'll look at how data flows through our app and how to capture it efficiently in our apps. We'll look at methods for taking and processing data, interacting with it in our application, and ways to process it with JavaScript. We'll take a dive into the world of data science and visualization with Angular 2 to boot.",
    presentation: "",
    video: "ZVEp9K_cynU",
    links: []
  }, {
    category: "Test",
    title: "Unit Tests for Angular 2 Applications",
    presenter: "Vikram Subramanian",
    shortDesc: "This presentation covered unit test for Angular2",
    longDesc: "This talk will cover the latest and greatest test utilities we have in Angular 2 to help unit test your components and Applications.",
    presentation: "https://docs.google.com/presentation/d/1fFxQvx2WHFPqR4piq0oWgKBuSMvrCwc1vfYggHlYEbQ/edit",
    video: "dVtDnvTLaIo",
    links: []
  }, {
    category: "App demo",
    title: "Embed hybrid features in Mobile Banking App",
    presenter: "Willem Veelenturf, Yun Bei",
    shortDesc: "This presentation / case study was about how they created a mobile app with Angular and how extended Cordova for their needs.",
    longDesc: "ING bank is facing a challenge in scaling up their mobile app development. The wish list of new features is long and good native mobile engineers are hard to find. A solution could be hybrid app development but there are a lot of preconceptions about this technology. We delivered a solution which tightly integrate native and hybrid and delivers: - seamless user experience o Native close UI implementation using IONIC and extending with custom ING theme o Javascript briges, which integrate the hybrid feature with mobile app extensions points using Cordova framework in a secure way. For example, HttpPlugin intercepts all http requests and route them to the native layer. - Scale to an enterprise level o Continuous integration to enable web developers easily performs integration tests with native extension points, without having knowledge of native app development o ING the guide implements ING visual identity and provides reusable components to use in hybrid solution.",
    presentation: "",
    video: "kmNRgOLZhXQ",
    links: []
  }, {
    category: "Security",
    title: "Security in Angular 2",
    presenter: "Martin Probst, Raphaël Jamet",
    shortDesc: "This presentation was about: Angular2 is secure by default and be careful when you enables user content as html.",
    longDesc: "Secure your Angular application! Learn about Angular's philosophy on tackling security, the rationale behind the security APIs, and get rid of Cross Site Scripting (XSS) once and for all.",
    presentation: "https://docs.google.com/presentation/d/10XGHmOL8KZn-r3TLbvZlzhvDcH7x-Ljte9P9Q0JJcFo/preview?slide=id.p",
    video: "WN-XczmI-LY",
    links: []
  }, {
    category: "Bootstrap",
    title: "Getting to Angular 2",
    presenter: "Jen Bourey ",
    shortDesc: "It’s about angular upgrade methods. (included Angular1 - Angular2 parallel routing)",
    longDesc: "Angular 2 has exciting performance and developer velocity benefits, but migrating a large, complex, existing application can seem daunting. Come learn real-world strategies for upgrading with sanity. We'll cover iterative migration strategies and talk about ways new Angular 2 APIs can help you manage large codebases. This talk will be grounded in the strategies Google is currently using to migrate public, in-production applications.",
    presentation: "",
    video: "2b-tEis9k4M",
    links: ["https://github.com/bourey/ngupgrade-example"]
  }, {
    category: "Tool",
    title: "Typescript latest",
    presenter: "Daniel Rosenwasser",
    shortDesc: "This is about how we can move our codebase form js to ts.",
    longDesc: "In this talk we will explore what's new in 2.0, what’s coming in 2.1 and what Typescript helps you accomplish.",
    presentation: "",
    video: "o8YI2hvassE",
    links: []
  }, {
    category: "Tool",
    title: "AngularFire2 and you",
    presenter: "Erik Haddad",
    shortDesc: "",
    longDesc: "Discover how Firebase can streamline development processes and how to easily add AngularFire2 to your Angular2 apps.",
    presentation: "",
    video: "uLzMOaFt6vc",
    links: ["https://github.com/erikhaddad/angular2-quando", "https://quando.social/"]
  }, {
    category: "Lightning Talks",
    title: "Data Binding in Angular 2",
    presenter: "Manfred Steyer",
    shortDesc: "",
    longDesc: "",
    presentation: "https://speakerdeck.com/manfredsteyer/databinding-in-angular-2",
    video: "JyHIUMgN_Ew",
    links: []
  }, {
    category: "Lightning Talks",
    title: "Angular 2 love at first sight with GraphQL",
    presenter: "Gerard Sans",
    shortDesc: "",
    longDesc: "",
    presentation: "http://slides.com/gerardsans/ngeurope-ng2-loves-graphql#/",
    video: "8lBepXJWfb0",
    links: []
  }, {
    category: "Lightning Talks",
    title: "Dynamic Angular2 Forms",
    presenter: "Mashhood Rastgar",
    shortDesc: "",
    longDesc: "",
    presentation: "",
    video: "hf1plxcF0sk",
    links: []
  }, {
    category: "Lightning Talks",
    title: "Upgrading 1.x -> ng2 + ngrx",
    presenter: "Simon Hampton",
    shortDesc: "",
    longDesc: "",
    presentation: "",
    video: "_HiLfC-3g60",
    links: ["https://github.com/simonh1000/af-ng2-ngrx"]
  }, {
    category: "Lightning Talks",
    title: "RxJS & angular.js",
    presenter: "Wolfgang Goedel",
    shortDesc: "",
    longDesc: "",
    presentation: "",
    video: "n9us_5FmEIo",
    links: ["https://github.com/wolfgangGoedel/observe-on-scope"]
  }, {
    category: "Tool",
    title: "Angular CLI & You",
    presenter: "Hans Larsen",
    shortDesc: " A cool keynote about Angular CLI and its functions.",
    longDesc: "The Angular CLI makes it simple and easy to get started. Learn about creating and running projects with the CLI, testing and deployin, with a quick look at the technology that supports your Angular projects.",
    presentation: "",
    video: "LN2xvQqAo-g",
    links: ["https://cli.angular.io"]
  }, {
    category: "Tool",
    title: "New Insights into Angular 2 Applications with Augury",
    presenter: "Vanessa Yuen",
    shortDesc: "Nice presentation about more debugging possibilities with Augury (with live demo)",
    longDesc: "Augury is a Chrome Developer Tools extension that allows developers to visualize their Angular 2.0 application’s component tree and the data associated with it. Our goal with this project is two-fold: help developers find bugs in their Angular 2.0 applications but also allow them to visualize their applications and their higher level structure at runtime. Our long term vision is also to help developers optimize the performance of their application using this tool. Augury itself is an open source effort started at Rangle.io and is developed using TypeScript and Angular 2.0.",
    presentation: "http://slides.com/vanessayuenn/augury-ngeurope#/",
    video: "YaDFDGS3EFM",
    links: ["https://augury.angular.io/", "https://github.com/rangle/augury"]
  }, {
    category: "Tool",
    title: "Getting Universal with Angular 2",
    presenter: "Wassim Chegham",
    shortDesc: "An overall preview of server-side rendering.",
    longDesc: "This is a quick introduction to Universal (isomorphic) JavaScript support for Angular 2. The Angular Universal project aims to add support for server side rendering to Angular 2 apps. In other words, with Universal you will be able to render your Angular 2 application both on the client and the server. If you're curious and want to know and see how Angular 2 is handling universality then don't miss this talk.",
    presentation: "https://slides.com/wassimchegham/angular2-universal",
    video: "faWCLmYsFQ8",
    links: ["https://universal.angular.io/", "https://github.com/angular/universal-starter"]
  }, {
    category: "Tool",
    title: "From UI-Router to Component Router",
    presenter: "Nir Kaufman",
    shortDesc: "An overall review of ng2 routing (compared to ng1 stateProvider) and with useful demo. (e.g. Render multiple views at the same time (with splitted route from url))",
    longDesc: "Angular2 introduced a brand new powerful router. For those of us who have been developing with Angular 1.x for years, it requires a change in the way we perceive routing. Since Angular2 requires composing Component Trees instead of MVC ‘views’, we have much more flexibility then ever before. During this talk Nir will help you make the switch from UI-Router/NG-router to the component router through a series of side by side comparison of all key features. Topics to be covered: - Configuring the component router - Passing route parameters - Creating nested routes - Hooking to the router lifecycle - Side by side feature comparison of UI router and Component router",
    presentation: "",
    video: "vQFImWHxCDM",
    links: ["https://vsavkin.com/", "https://leanpub.com/router"]
  }, {
    category: "App demo",
    title: "Reactive Music Apps in Angular and RxJS",
    presenter: "Tero Parviainen",
    shortDesc: "A nice and enjoyable demo of rxjs and ng2.",
    longDesc: "Angular 2 combined with RxJS, @ngrx/store, and Immutable.js is a fantastic platform for reactive web applications. If we also add hot loading and the Web Audio API to the mix, we end up with something truly exciting: A platform for reactive music creation. This talk is about creating musical systems on the Angular platform. We’ll see how we can use @ngrx/store and Observables to model a generative music process that the user can control on the fly. It’s a really enjoyable way to learn reactive Angular application development!",
    presentation: "",
    video: "-fPyfSAEZgk",
    links: ["http://teropa.info/in-c/", "https://github.com/teropa/in-c", "https://www.youtube.com/watch?v=Qh-PoMri_cU"]
  }, {
    category: "Tool",
    title: "ngAnimate2 = Layouts + Animations",
    presenter: "Matias Niemelä",
    shortDesc: "Overall review of ng2 animations.",
    longDesc: "In addition to animations, ngAnimate2 can also boost the capabilities of how the user interface behaves in Angular2. Let’s dive in and see how animations work alongside states and layout mechanics in Angular2 and how they enable developers to create a powerful, responsive and flexible UI system.",
    presentation: "http://yom.nu/ng2eu-2016",
    video: "NGNE7LMd9VY",
    links: ["http://github.com/matsko/ng2eu-2016-code"]
  }, {
    category: "Story",
    title: "Evolution of Web on Mobile",
    presenter: "Adam Bradley",
    shortDesc: "",
    longDesc: "In this session we’ll take a step back to study the history of the mobile web platform, and exactly what has made it both unique and highly successful. We’ll review how the combination of new standardized APIs, improved devices and relentless open source communities have driven the mobile web to what it is today. There’s no doubt that the development stack has improved dramatically with modern the web platform, browsers and devices. We’ll discuss how Ionic is able to take advantage of these awesome new technologies, such as progressive web apps, to easily create beautiful, high-performing web apps that can be scaled on the largest distribution channel in the world: the web.",
    presentation: "",
    video: "7rzjmsUBmFQ",
    links: []
  }, {
    category: "Reactive",
    title: "You will learn RxJS",
    presenter: "André Staltz",
    shortDesc: "Nice overview how RxJS works. (demo: write native js functions)",
    longDesc: "Reactive programming with Observables can seem like a hard skill to learn. In this talk you will see Andre live code and explain the basics of RxJS Observables in a way that will demystify the concepts. We will build our own Observable from scratch, as well as our own basic operators, then see why RxJS can easily solve your async events problems.",
    presentation: "",
    video: "uQ1zhJHclvs",
    links: []
  }, {
    category: "Performance",
    title: "Optimizing Angular 2 Applications",
    presenter: "Alex Eagle",
    shortDesc: "",
    longDesc: "Minification used to be a topic for library developers who distribute a foo-min.js script for users to drop into their page. With ES6 modules, we can do better, by minifying the entire application along with its dependencies into a single .js bundle. We will cover the tooling pipeline, from Angular's template compiler, through tree-shaking, bundling, and minification.",
    presentation: "https://t.co/bMrJ7omGM6",
    video: "Ml7qHlk80kc",
    links: ["https://blog.kissmetrics.com/loading-time/"]
  }, {
    category: "App demo",
    title: "Full throttle Cross-platform development with Angular 2, Cordova and Electron",
    presenter: "Christian Weyer, Thorsten Hans",
    shortDesc: "Cool overview of building ng2 apps to mobile (with cordova) (and electron)",
    longDesc: "Fasten your seatbelt and join the Angular 2 Cross Platform race! In this talk you'll see how to bring your Angular applications to any platform using the browser, Apache Cordova and GitHub Electron. Join Christian Weyer and Thorsten Hans on the road trip from the web, over mobile devices to all major desktop platforms - with Angular 2 as the engine and GulpJS as the fuel.",
    presentation: "https://speakerdeck.com/christianweyer/full-throttle-cross-platform-development-with-angular-2-cordova-and-electron",
    video: "TqFnVdPFVU0",
    links: ["http://bit.ly/hacks-ngeurope2016", "https://github.com/electron/electron"]
  }, {
    category: "Performance",
    title: "Custom renderers in Angular 2",
    presenter: "Marc Laval",
    shortDesc: "",
    longDesc: "The rendering architecture of Angular 2 is one of its major strength. This is the reason why it can run in a webworker or on a server. It also enables the creation of custom renderers so that an application can generate a simple markdown file, or a full mobile application with react-native. Let's dive into it and discover how great it is!",
    presentation: "https://t.co/43uvtdLLk1",
    video: "iE-wYf4AaiM",
    links: []
  }, {
    category: "Q&A",
    title: "Q&A Panel",
    presenter: "",
    shortDesc: "",
    longDesc: "",
    presentation: "",
    video: "qcfThV5aLuE",
    links: []
  }];
}
