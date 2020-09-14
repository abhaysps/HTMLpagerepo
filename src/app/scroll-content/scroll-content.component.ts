import { Component, OnInit } from '@angular/core';
// import ScrollMagic from 'scrollmagic';
// import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// declare var ScrollMagic: any;

@Component({
  selector: 'app-scroll-content',
  templateUrl: './scroll-content.component.html',
  styleUrls: ['./scroll-content.component.css']
})
export class ScrollContentComponent implements OnInit {

  // ctrl = new ScrollMagic.Controller({addIndicators: true});

  constructor() { }

  ngOnInit(): void {
  }

  onScroll(value) {
    // console.log(value)
    // console.log('scroll top: ', document.documentElement.scrollTop)
    // var image = document.getElementById("showScroll"); 
    // if (document.documentElement.scrollTop < 2300) {
    //   document.getElementById("showScroll").innerHTML = "First Scroll"
    //   document.getElementById("h").style.backgroundColor = "red";
    // } else if ( document.documentElement.scrollTop >= 2300) {
    //   document.getElementById("showScroll").innerHTML = "Second Scroll"
    //   document.getElementById("h").style.backgroundColor = "green";
    // }
    // new ScrollMagic.Scene({triggerElement: "#showScroll1"})
		// 				.setPin("#showScroll1")
		// 				.addIndicators({name: "2 (duration: 500)"}) // add indicators (requires plugin)
		// 				.addTo(this.ctrl);
  }

}
