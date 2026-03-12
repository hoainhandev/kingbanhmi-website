import svgPaths from "./svg-3p9q82tv7h";
import imgImg from "@/assets/1b1add06a7bc7986e890eac8334a8c35e64679ee.png";
import imgImg1 from "@/assets/8bae55a7541b9acd47578c0686deaa3132cb871c.png";
import imgMotionImg from "@/assets/cae44d3ac6e71b335f975aab2008c9acb433f783.png";
import imgMotionImg1 from "@/assets/c47278509caa1144977f730c2484a20701c093b7.png";
import imgMotionImg2 from "@/assets/364b113549d3e976589dc2f8aecb175f0115ef4a.png";
import imgMotionImg3 from "@/assets/4bdf7f27a3c9823abf6616e921e32cdfa1366dbf.png";
import imgMotionImg4 from "@/assets/0bee3a8c4461cd05bca6d11318a8d3bfdbe979e8.png";
import imgMotionImg5 from "@/assets/4a9fae5b4532357b6b577a1916dbaa25dd523c2c.png";
import imgMotionImg6 from "@/assets/3a97db357a81711ee7609955863e64f8282e96f7.png";

function Img() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="motion.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Img />
      </div>
    </div>
  );
}

function MotionButton() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[43.102px]" data-name="motion.button">
      <p className="-translate-x-1/2 absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[22.5px] not-italic text-[#fcaf15] text-[14px] text-center top-[0.5px] tracking-[0.1996px]">HOME</p>
    </div>
  );
}

function MotionButton1() {
  return (
    <div className="absolute h-[20px] left-[75.1px] top-0 w-[42.594px]" data-name="motion.button">
      <p className="-translate-x-1/2 absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[21.5px] not-italic text-[#fbfbfb] text-[14px] text-center top-[0.5px] tracking-[0.1996px]">MENU</p>
    </div>
  );
}

function MotionButton2() {
  return (
    <div className="absolute h-[20px] left-[149.7px] top-0 w-[83.32px]" data-name="motion.button">
      <p className="-translate-x-1/2 absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[42.5px] not-italic text-[#fbfbfb] text-[14px] text-center top-[0.5px] tracking-[0.1996px]">OUR STORY</p>
    </div>
  );
}

function MotionButton3() {
  return (
    <div className="absolute h-[20px] left-[265.02px] top-0 w-[82.273px]" data-name="motion.button">
      <p className="-translate-x-1/2 absolute capitalize font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[41px] not-italic text-[#fbfbfb] text-[14px] text-center top-[0.5px] tracking-[0.1996px]">LOCATIONS</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[20px] relative shrink-0 w-[347.289px]" data-name="nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MotionButton />
        <MotionButton1 />
        <MotionButton2 />
        <MotionButton3 />
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8_2376)" id="Phone">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8_2376">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.5px] tracking-[-0.1504px]">(212) 912-0000</p>
      </div>
    </div>
  );
}

function MotionA() {
  return (
    <div className="bg-[#fcaf15] flex-[1_0_0] h-[38px] min-h-px min-w-px relative rounded-[4px]" data-name="motion.a">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Phone />
          <Span />
        </div>
      </div>
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0 w-[162.281px]" data-name="motion.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <MotionA />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.008px] relative size-full">
          <MotionDiv />
          <Nav />
          <MotionDiv1 />
        </div>
      </div>
    </div>
  );
}

function MotionHeader() {
  return (
    <div className="bg-[#013a0f] h-[80px] relative shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="motion.header">
      <div className="content-stretch flex flex-col items-start px-[71.5px] relative size-full">
        <Div />
      </div>
    </div>
  );
}

function Img1() {
  return (
    <div className="absolute h-[907px] left-0 opacity-70 top-0 w-[1359px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Div2() {
  return <div className="absolute bg-[rgba(16,16,16,0.3)] h-[907px] left-0 top-0 w-[1359px]" data-name="div" />;
}

function MotionDiv2() {
  return (
    <div className="absolute h-[907px] left-0 top-0 w-[1359px]" data-name="motion.div">
      <Img1 />
      <Div2 />
    </div>
  );
}

function MotionDiv3() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-27 rounded-[16777200px] size-[4px] top-[-83.01px]" data-name="motion.div" />;
}

function MotionDiv4() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-29 rounded-[16777200px] size-[4px] top-[-86.8px]" data-name="motion.div" />;
}

function MotionDiv5() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-13 rounded-[16777200px] size-[4px] top-[-50.77px]" data-name="motion.div" />;
}

function MotionDiv6() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-2 rounded-[16777200px] size-[4px] top-[-10.07px]" data-name="motion.div" />;
}

function MotionDiv7() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-1 rounded-[16777200px] size-[4px] top-[-5.01px]" data-name="motion.div" />;
}

function MotionDiv8() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-21 rounded-[16777200px] size-[4px] top-[-71.98px]" data-name="motion.div" />;
}

function MotionDiv9() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-10 rounded-[16777200px] size-[4px] top-[-39.77px]" data-name="motion.div" />;
}

function MotionDiv10() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-4 rounded-[16777200px] size-[4px] top-[-18.02px]" data-name="motion.div" />;
}

function MotionDiv11() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-21 rounded-[16777200px] size-[4px] top-[-73.04px]" data-name="motion.div" />;
}

function MotionDiv12() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-0 rounded-[16777200px] size-[4px] top-[-1.37px]" data-name="motion.div" />;
}

function MotionDiv13() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-23 rounded-[16777200px] size-[4px] top-[-76.71px]" data-name="motion.div" />;
}

function MotionDiv14() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-22 rounded-[16777200px] size-[4px] top-[-73.89px]" data-name="motion.div" />;
}

function MotionDiv15() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-32 rounded-[16777200px] size-[4px] top-[-90.84px]" data-name="motion.div" />;
}

function MotionDiv16() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-0 rounded-[16777200px] size-[4px] top-[-0.02px]" data-name="motion.div" />;
}

function MotionDiv17() {
  return <div className="absolute bg-[rgba(253,183,20,0.2)] left-0 opacity-35 rounded-[16777200px] size-[4px] top-[-93.46px]" data-name="motion.div" />;
}

function Div3() {
  return (
    <div className="absolute h-[907px] left-0 overflow-clip top-0 w-[1359px]" data-name="div">
      <MotionDiv3 />
      <MotionDiv4 />
      <MotionDiv5 />
      <MotionDiv6 />
      <MotionDiv7 />
      <MotionDiv8 />
      <MotionDiv9 />
      <MotionDiv10 />
      <MotionDiv11 />
      <MotionDiv12 />
      <MotionDiv13 />
      <MotionDiv14 />
      <MotionDiv15 />
      <MotionDiv16 />
      <MotionDiv17 />
    </div>
  );
}

function MotionH() {
  return (
    <div className="absolute h-[96px] left-[16px] top-0 w-[754.25px]" data-name="motion.h1">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[96px] left-[377px] not-italic text-[96px] text-center text-white top-px tracking-[9.6px]">KING BANH MI</p>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[36px] min-h-px min-w-px not-italic relative text-[#d1d5dc] text-[30px] text-center tracking-[3.3955px] uppercase whitespace-pre-wrap">An Original</p>
    </div>
  );
}

function P1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[377.28px] not-italic text-[36px] text-center text-white top-[0.5px] tracking-[1.2691px]">TASTE OF SAIGON</p>
    </div>
  );
}

function MotionDiv18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-[16px] top-[120px] w-[754.25px]" data-name="motion.div">
      <P />
      <P1 />
    </div>
  );
}

function MotionP() {
  return (
    <div className="absolute h-[58.5px] left-[57.13px] top-[236px] w-[672px]" data-name="motion.p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[336.45px] not-italic text-[#d1d5dc] text-[18px] text-center top-[0.5px] tracking-[-0.4395px] w-[648px] whitespace-pre-wrap">Experience the authentic flavors of Vietnam, crafted with love for the Vietnamese community in America</p>
    </div>
  );
}

function MotionButton4() {
  return (
    <div className="absolute border-2 border-solid border-white h-[60px] left-[425.29px] rounded-[6px] top-0 w-[206.828px]" data-name="motion.button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[101.5px] not-italic text-[16px] text-center text-white top-[15.5px] tracking-[-0.3125px]">EXPLORE MENU</p>
    </div>
  );
}

function MotionDiv20() {
  return <div className="absolute bg-[#e6a612] h-[56px] left-[-285.16px] top-0 w-[285px]" data-name="motion.div" />;
}

function Svg() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_2409)" id="svg">
          <path d={svgPaths.p18907d00} fill="var(--fill-0, #1A5633)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_2409">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute h-[24px] left-[40px] top-[16px] w-[205.156px]" data-name="span">
      <Svg />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[117px] not-italic text-[#1a5633] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px]">ORDER ON DOORDASH</p>
    </div>
  );
}

function MotionA1() {
  return (
    <div className="absolute bg-[#fdb714] border border-[#fdb714] border-solid h-[58px] left-[122.13px] overflow-clip rounded-[6px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-px w-[287.156px]" data-name="motion.a">
      <MotionDiv20 />
      <Span1 />
    </div>
  );
}

function MotionDiv19() {
  return (
    <div className="absolute h-[60px] left-[16px] top-[342.5px] w-[754.25px]" data-name="motion.div">
      <MotionButton4 />
      <MotionA1 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="ChevronDown">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 10.6667">
            <path d={svgPaths.p1cc96380} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MotionDiv21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[377.13px] size-[32px] top-[347.96px]" data-name="motion.div">
      <ChevronDown />
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute h-[402.5px] left-[286.38px] top-[252.25px] w-[786.25px]" data-name="div">
      <MotionH />
      <MotionDiv18 />
      <MotionP />
      <MotionDiv19 />
      <MotionDiv21 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-black h-[907px] overflow-clip relative shrink-0 w-full" data-name="section">
      <MotionDiv2 />
      <Div3 />
      <Div4 />
    </div>
  );
}

function MotionDiv22() {
  return <div className="bg-[#1a5633] blur-[64px] h-[277.286px] rounded-[16777200px] shrink-0 w-full" data-name="motion.div" />;
}

function Div5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1511px] items-start left-0 opacity-5 overflow-clip pl-[50.145px] pr-[1031.568px] pt-[69.356px] top-0 w-[1359px]" data-name="div">
      <MotionDiv22 />
    </div>
  );
}

function MotionH1() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[1216px]" data-name="motion.h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-[608.95px] not-italic text-[60px] text-black text-center top-[0.5px] tracking-[1.7637px]">FLAVORS OF SAIGON</p>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[#fdb714] h-[4px] left-[560px] top-[76px] w-[96px]" data-name="Container" />;
}

function MotionP1() {
  return (
    <div className="absolute h-[56px] left-[272px] top-[104px] w-[672px]" data-name="motion.p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[336.23px] not-italic text-[#4a5565] text-[18px] text-center top-0 tracking-[-0.4395px] w-[644px] whitespace-pre-wrap">Each bánh mì is a story of Saigon streets, crafted with fresh ingredients and over 200 years of tradition</p>
    </div>
  );
}

function MotionDiv23() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="motion.div">
      <MotionH1 />
      <Container />
      <MotionP1 />
    </div>
  );
}

function MotionImg() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[382px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg} />
    </div>
  );
}

function MotionDiv25() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] h-[288px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.2)] w-[382px]" data-name="motion.div" />;
}

function Star() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_8_2397)" id="Star">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #1A5633)" id="Vector" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_8_2397">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span2() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#1a5633] text-[12px] top-px tracking-[0.6px]">POPULAR</p>
      </div>
    </div>
  );
}

function MotionDiv26() {
  return (
    <div className="absolute bg-[#fdb714] content-stretch flex gap-[4px] h-[28px] items-center left-[262.8px] px-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[16px] w-[103.195px]" data-name="motion.div">
      <Star />
      <Span2 />
    </div>
  );
}

function MotionDiv27() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[288px] left-[173.99px] opacity-18 to-[rgba(0,0,0,0)] top-0 via-1/2 via-white w-[382px]" data-name="motion.div" />;
}

function Div7() {
  return (
    <div className="h-[288px] overflow-clip relative shrink-0 w-full" data-name="div">
      <MotionImg />
      <MotionDiv25 />
      <MotionDiv26 />
      <MotionDiv27 />
    </div>
  );
}

function H1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-black top-0 tracking-[0.0105px]">BÁNH MÌ ĐẶC BIỆT</p>
    </div>
  );
}

function P2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.6px] uppercase">King Special</p>
    </div>
  );
}

function Div9() {
  return (
    <div className="h-[48px] relative shrink-0 w-[169.672px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <H1 />
        <P2 />
      </div>
    </div>
  );
}

function MotionSpan() {
  return (
    <div className="h-[32px] relative shrink-0 w-[68.984px]" data-name="motion.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-black top-0 tracking-[0.0703px]">$8.99</p>
      </div>
    </div>
  );
}

function MotionDiv28() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="motion.div">
      <Div9 />
      <MotionSpan />
    </div>
  );
}

function P3() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[289px] whitespace-pre-wrap">Vietnamese ham, head cheese, pâté, pickled vegetables, cilantro, and jalapeños</p>
    </div>
  );
}

function Div8() {
  return (
    <div className="bg-white h-[213.5px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <MotionDiv28 />
        <P3 />
      </div>
    </div>
  );
}

function MotionDiv24() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="motion.div">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Div7 />
          <Div8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MotionImg1() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[382px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg1} />
    </div>
  );
}

function MotionDiv30() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] h-[288px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.2)] w-[382px]" data-name="motion.div" />;
}

function Star1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_8_2397)" id="Star">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #1A5633)" id="Vector" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_8_2397">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span3() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#1a5633] text-[12px] top-px tracking-[0.6px]">POPULAR</p>
      </div>
    </div>
  );
}

function MotionDiv31() {
  return (
    <div className="absolute bg-[#fdb714] content-stretch flex gap-[4px] h-[28px] items-center left-[262.8px] px-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[16px] w-[103.195px]" data-name="motion.div">
      <Star1 />
      <Span3 />
    </div>
  );
}

function MotionDiv32() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[288px] left-[-252.18px] opacity-6 to-[rgba(0,0,0,0)] top-0 via-1/2 via-white w-[382px]" data-name="motion.div" />;
}

function Div10() {
  return (
    <div className="h-[288px] overflow-clip relative shrink-0 w-full" data-name="div">
      <MotionImg1 />
      <MotionDiv30 />
      <MotionDiv31 />
      <MotionDiv32 />
    </div>
  );
}

function H2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-black top-0 tracking-[0.0105px]">BÁNH MÌ THỊT NƯỚNG</p>
    </div>
  );
}

function P4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.6px] uppercase">Grilled Pork</p>
    </div>
  );
}

function Div12() {
  return (
    <div className="h-[48px] relative shrink-0 w-[201.016px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <H2 />
        <P4 />
      </div>
    </div>
  );
}

function MotionSpan1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[68.984px]" data-name="motion.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-black top-0 tracking-[0.0703px]">$8.99</p>
      </div>
    </div>
  );
}

function MotionDiv33() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="motion.div">
      <Div12 />
      <MotionSpan1 />
    </div>
  );
}

function P5() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[275px] whitespace-pre-wrap">Marinated grilled pork, pickled vegetables, cucumber, cilantro, and house sauce</p>
    </div>
  );
}

function Div11() {
  return (
    <div className="bg-white h-[213.5px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <MotionDiv33 />
        <P5 />
      </div>
    </div>
  );
}

function MotionDiv29() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="motion.div">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Div10 />
          <Div11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MotionImg2() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[382px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg2} />
    </div>
  );
}

function MotionDiv35() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] h-[288px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.2)] w-[382px]" data-name="motion.div" />;
}

function MotionDiv36() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[288px] left-[-367.5px] opacity-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-white w-[382px]" data-name="motion.div" />;
}

function Div13() {
  return (
    <div className="h-[288px] overflow-clip relative shrink-0 w-full" data-name="div">
      <MotionImg2 />
      <MotionDiv35 />
      <MotionDiv36 />
    </div>
  );
}

function H3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-black top-0 tracking-[0.0105px]">BÁNH MÌ GÀ NƯỚNG</p>
    </div>
  );
}

function P6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.6px] uppercase">Grilled Chicken</p>
    </div>
  );
}

function Div15() {
  return (
    <div className="h-[48px] relative shrink-0 w-[184.078px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <H3 />
        <P6 />
      </div>
    </div>
  );
}

function MotionSpan2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[68.984px]" data-name="motion.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-black top-0 tracking-[0.0703px]">$8.99</p>
      </div>
    </div>
  );
}

function MotionDiv37() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="motion.div">
      <Div15 />
      <MotionSpan2 />
    </div>
  );
}

function P7() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[309px] whitespace-pre-wrap">Lemongrass grilled chicken, pickled vegetables, cucumber, and cilantro</p>
    </div>
  );
}

function Div14() {
  return (
    <div className="bg-white h-[213.5px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <MotionDiv37 />
        <P7 />
      </div>
    </div>
  );
}

function MotionDiv34() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="motion.div">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Div13 />
          <Div14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MotionImg3() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[382px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg3} />
    </div>
  );
}

function MotionDiv39() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] h-[288px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.2)] w-[382px]" data-name="motion.div" />;
}

function Div16() {
  return (
    <div className="h-[288px] overflow-clip relative shrink-0 w-full" data-name="div">
      <MotionImg3 />
      <MotionDiv39 />
    </div>
  );
}

function H4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-black top-0 tracking-[0.0105px]">BÁNH MÌ TRỨNG ỐP LA</p>
    </div>
  );
}

function P8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.6px] uppercase">Fried Egg</p>
    </div>
  );
}

function Div18() {
  return (
    <div className="h-[48px] relative shrink-0 w-[209.5px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <H4 />
        <P8 />
      </div>
    </div>
  );
}

function MotionSpan3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[65.094px]" data-name="motion.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-black top-0 tracking-[0.0703px]">$7.99</p>
      </div>
    </div>
  );
}

function MotionDiv40() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="motion.div">
      <Div18 />
      <MotionSpan3 />
    </div>
  );
}

function P9() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[310px] whitespace-pre-wrap">Fried eggs, pâté, pickled vegetables, cucumber, and cilantro</p>
    </div>
  );
}

function Div17() {
  return (
    <div className="bg-white h-[213.5px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <MotionDiv40 />
        <P9 />
      </div>
    </div>
  );
}

function MotionDiv38() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="motion.div">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Div16 />
          <Div17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MotionImg4() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[382px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg4} />
    </div>
  );
}

function MotionDiv42() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] h-[288px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.2)] w-[382px]" data-name="motion.div" />;
}

function Div19() {
  return (
    <div className="h-[288px] overflow-clip relative shrink-0 w-full" data-name="div">
      <MotionImg4 />
      <MotionDiv42 />
    </div>
  );
}

function H5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-black top-0 tracking-[0.0105px]">BÁNH MÌ XÍU MẠI</p>
    </div>
  );
}

function P10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.6px] uppercase">Meatball</p>
    </div>
  );
}

function Div21() {
  return (
    <div className="h-[48px] relative shrink-0 w-[156.844px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <H5 />
        <P10 />
      </div>
    </div>
  );
}

function MotionSpan4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[68.984px]" data-name="motion.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-black top-0 tracking-[0.0703px]">$8.99</p>
      </div>
    </div>
  );
}

function MotionDiv43() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="motion.div">
      <Div21 />
      <MotionSpan4 />
    </div>
  );
}

function P11() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[303px] whitespace-pre-wrap">Vietnamese meatballs in tomato sauce, pickled vegetables, and cilantro</p>
    </div>
  );
}

function Div20() {
  return (
    <div className="bg-white h-[213.5px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <MotionDiv43 />
        <P11 />
      </div>
    </div>
  );
}

function MotionDiv41() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="motion.div">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Div19 />
          <Div20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MotionImg5() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[382px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg5} />
    </div>
  );
}

function MotionDiv45() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] h-[288px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.2)] w-[382px]" data-name="motion.div" />;
}

function Div22() {
  return (
    <div className="h-[288px] overflow-clip relative shrink-0 w-full" data-name="div">
      <MotionImg5 />
      <MotionDiv45 />
    </div>
  );
}

function H6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-black top-0 tracking-[0.0105px]">BÁNH MÌ CHAY</p>
    </div>
  );
}

function P12() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.6px] uppercase">Vegetarian</p>
    </div>
  );
}

function Div24() {
  return (
    <div className="h-[48px] relative shrink-0 w-[136.453px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <H6 />
        <P12 />
      </div>
    </div>
  );
}

function MotionSpan5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[65.094px]" data-name="motion.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-black top-0 tracking-[0.0703px]">$7.99</p>
      </div>
    </div>
  );
}

function MotionDiv46() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="motion.div">
      <Div24 />
      <MotionSpan5 />
    </div>
  );
}

function P13() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[317px] whitespace-pre-wrap">Tofu, mushrooms, pickled vegetables, cucumber, and cilantro</p>
    </div>
  );
}

function Div23() {
  return (
    <div className="bg-white h-[213.5px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <MotionDiv46 />
        <P13 />
      </div>
    </div>
  );
}

function MotionDiv44() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="motion.div">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Div22 />
          <Div23 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[1039px] relative shrink-0 w-full" data-name="Container">
      <MotionDiv24 />
      <MotionDiv29 />
      <MotionDiv34 />
      <MotionDiv38 />
      <MotionDiv41 />
      <MotionDiv44 />
    </div>
  );
}

function P14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-[608.38px] text-[#6a7282] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px]">All bánh mì are served on freshly baked French baguettes with house-made pickled vegetables</p>
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1351px] items-start left-[39.5px] px-[32px] top-[80px] w-[1280px]" data-name="div">
      <MotionDiv23 />
      <Container1 />
      <P14 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white h-[1511px] overflow-clip relative shrink-0 w-full" data-name="section">
      <Div5 />
      <Div6 />
    </div>
  );
}

function MotionDiv47() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-32 rounded-[16777200px] size-[8px] top-[-548.25px]" data-name="motion.div" />;
}

function MotionDiv48() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-30 rounded-[16777200px] size-[8px] top-[-238.13px]" data-name="motion.div" />;
}

function MotionDiv49() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-3 rounded-[16777200px] size-[8px] top-[-775.29px]" data-name="motion.div" />;
}

function MotionDiv50() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-0 rounded-[16777200px] size-[8px] top-[-799.12px]" data-name="motion.div" />;
}

function MotionDiv51() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-40 rounded-[16777200px] size-[8px] top-[-477.2px]" data-name="motion.div" />;
}

function MotionDiv52() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-32 rounded-[16777200px] size-[8px] top-[-542.2px]" data-name="motion.div" />;
}

function MotionDiv53() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-18 rounded-[16777200px] size-[8px] top-[-655.82px]" data-name="motion.div" />;
}

function MotionDiv54() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-50 rounded-[16777200px] size-[8px] top-[-399.12px]" data-name="motion.div" />;
}

function MotionDiv55() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-10 rounded-[16777200px] size-[8px] top-[-76.16px]" data-name="motion.div" />;
}

function MotionDiv56() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-5 rounded-[16777200px] size-[8px] top-[-36.06px]" data-name="motion.div" />;
}

function MotionDiv57() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-46 rounded-[16777200px] size-[8px] top-[-369.27px]" data-name="motion.div" />;
}

function MotionDiv58() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-31 rounded-[16777200px] size-[8px] top-[-551.53px]" data-name="motion.div" />;
}

function MotionDiv59() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-3 rounded-[16777200px] size-[8px] top-[-775.51px]" data-name="motion.div" />;
}

function MotionDiv60() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-5 rounded-[16777200px] size-[8px] top-[-762.35px]" data-name="motion.div" />;
}

function MotionDiv61() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-1 rounded-[16777200px] size-[8px] top-[-793.62px]" data-name="motion.div" />;
}

function MotionDiv62() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-2 rounded-[16777200px] size-[8px] top-[-13.3px]" data-name="motion.div" />;
}

function MotionDiv63() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-11 rounded-[16777200px] size-[8px] top-[-716.09px]" data-name="motion.div" />;
}

function MotionDiv64() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-40 rounded-[16777200px] size-[8px] top-[-322.8px]" data-name="motion.div" />;
}

function MotionDiv65() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-46 rounded-[16777200px] size-[8px] top-[-431.9px]" data-name="motion.div" />;
}

function MotionDiv66() {
  return <div className="absolute border border-[#fdb714] border-solid left-0 opacity-6 rounded-[16777200px] size-[8px] top-[-45.45px]" data-name="motion.div" />;
}

function Div25() {
  return (
    <div className="absolute h-[714px] left-0 opacity-10 overflow-clip top-0 w-[1359px]" data-name="div">
      <MotionDiv47 />
      <MotionDiv48 />
      <MotionDiv49 />
      <MotionDiv50 />
      <MotionDiv51 />
      <MotionDiv52 />
      <MotionDiv53 />
      <MotionDiv54 />
      <MotionDiv55 />
      <MotionDiv56 />
      <MotionDiv57 />
      <MotionDiv58 />
      <MotionDiv59 />
      <MotionDiv60 />
      <MotionDiv61 />
      <MotionDiv62 />
      <MotionDiv63 />
      <MotionDiv64 />
      <MotionDiv65 />
      <MotionDiv66 />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[1216px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-[607.86px] not-italic text-[60px] text-center text-white top-[0.5px] tracking-[1.7637px]">SPECIAL OFFERS</p>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#fdb714] h-[4px] left-[560px] top-[68px] w-[96px]" data-name="Container" />;
}

function P15() {
  return (
    <div className="absolute h-[28px] left-0 top-[96px] w-[1216px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[608.35px] not-italic text-[#99a1af] text-[18px] text-center top-0 tracking-[-0.4395px]">Sharing the taste of home with your loved ones</p>
    </div>
  );
}

function MotionDiv67() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="motion.div">
      <H />
      <Container2 />
      <P15 />
    </div>
  );
}

function Gift() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Gift">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Gift">
          <path d={svgPaths.p2ea4dd00} id="Vector" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 10.6667V28" id="Vector_2" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2eddfe00} id="Vector_3" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p4be35c0} id="Vector_4" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function MotionDiv68() {
  return (
    <div className="absolute bg-[#fdb714] left-[160px] size-[64px] top-[33px]" data-name="motion.div">
      <Gift />
    </div>
  );
}

function H7() {
  return (
    <div className="absolute h-[32px] left-[33px] top-[121px] w-[318px]" data-name="h3">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[159.05px] not-italic text-[24px] text-black text-center top-0 tracking-[0.6703px]">BUY 2 GET 1</p>
    </div>
  );
}

function MotionP2() {
  return (
    <div className="absolute h-[48px] left-[33px] top-[165px] w-[318px]" data-name="motion.p">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[159.26px] not-italic text-[48px] text-black text-center top-[0.5px] tracking-[0.3516px]">FREE</p>
    </div>
  );
}

function P16() {
  return (
    <div className="absolute h-[24px] left-[33px] top-[229px] w-[318px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[158.56px] not-italic text-[#364153] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px]">{`Mix & match any bánh mì`}</p>
    </div>
  );
}

function P17() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[261px] w-[318px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[159.46px] not-italic text-[#6a7282] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">Available for dine-in and takeout</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <MotionDiv68 />
      <H7 />
      <MotionP2 />
      <P16 />
      <P17 />
    </div>
  );
}

function Clock() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Clock">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Clock">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 8V16L21.3333 18.6667" id="Vector_2" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function MotionDiv69() {
  return (
    <div className="absolute bg-[#fdb714] left-[160px] size-[64px] top-[33px]" data-name="motion.div">
      <Clock />
    </div>
  );
}

function H8() {
  return (
    <div className="absolute h-[32px] left-[33px] top-[121px] w-[318px]" data-name="h3">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[158.66px] not-italic text-[24px] text-black text-center top-0 tracking-[0.6703px]">HAPPY HOUR</p>
    </div>
  );
}

function MotionP3() {
  return (
    <div className="absolute h-[48px] left-[33px] top-[165px] w-[318px]" data-name="motion.p">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[159.13px] not-italic text-[48px] text-black text-center top-[0.5px] tracking-[0.3516px]">20% OFF</p>
    </div>
  );
}

function P18() {
  return (
    <div className="absolute h-[24px] left-[33px] top-[229px] w-[318px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[159.91px] not-italic text-[#364153] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px]">2PM - 5PM Daily</p>
    </div>
  );
}

function P19() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[261px] w-[318px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[159.12px] not-italic text-[#6a7282] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">All menu items</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <MotionDiv69 />
      <H8 />
      <MotionP3 />
      <P18 />
      <P19 />
    </div>
  );
}

function Users() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Users">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_2" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p37b568c0} id="Vector_4" stroke="var(--stroke-0, #1A5633)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function MotionDiv70() {
  return (
    <div className="absolute bg-[#fdb714] left-[160px] size-[64px] top-[33px]" data-name="motion.div">
      <Users />
    </div>
  );
}

function H9() {
  return (
    <div className="absolute h-[32px] left-[33px] top-[121px] w-[318px]" data-name="h3">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[158.8px] not-italic text-[24px] text-black text-center top-0 tracking-[0.6703px]">FAMILY COMBO</p>
    </div>
  );
}

function MotionP4() {
  return (
    <div className="absolute h-[48px] left-[33px] top-[165px] w-[318px]" data-name="motion.p">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[159.45px] not-italic text-[48px] text-black text-center top-[0.5px] tracking-[0.3516px]">$35.99</p>
    </div>
  );
}

function P20() {
  return (
    <div className="absolute h-[24px] left-[33px] top-[229px] w-[318px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[159.85px] not-italic text-[#364153] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px]">5 bánh mì + 5 drinks</p>
    </div>
  );
}

function P21() {
  return (
    <div className="absolute h-[20px] left-[33px] top-[261px] w-[318px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[159.3px] not-italic text-[#6a7282] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">Perfect for sharing</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <MotionDiv70 />
      <H9 />
      <MotionP4 />
      <P20 />
      <P21 />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[314px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function P22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[608.16px] not-italic text-[#99a1af] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">* Offers cannot be combined. Terms and conditions apply.</p>
    </div>
  );
}

function Div26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[554px] items-start left-[39.5px] px-[32px] top-[80px] w-[1280px]" data-name="div">
      <MotionDiv67 />
      <Container3 />
      <P22 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#013a0f] h-[714px] overflow-clip relative shrink-0 w-full" data-name="section">
      <Div25 />
      <Div26 />
    </div>
  );
}

function MotionH2() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[584px]" data-name="motion.h2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[0.5px] not-italic text-[48px] text-black top-0 tracking-[1.5516px] w-[584px] whitespace-pre-wrap">BÁNH MÌ AND CHILDHOOD DREAMS</p>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#fdb714] h-[4px] left-0 top-[120px] w-[96px]" data-name="Container" />;
}

function MotionP5() {
  return (
    <div className="absolute h-[78px] left-0 top-[148px] w-[584px]" data-name="motion.p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[569px] whitespace-pre-wrap">A touch of Saigon brought to America. Our journey began with a simple dream: to share the authentic taste of Vietnamese bánh mì with the Vietnamese community in the United States.</p>
    </div>
  );
}

function MotionP6() {
  return (
    <div className="absolute h-[78px] left-0 top-[250px] w-[584px]" data-name="motion.p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[561px] whitespace-pre-wrap">For over 200 years, bánh mì has been street food that shaped the soul of Saigon. We specialize in fresh ingredients, handcrafted daily, bringing you the true flavors that remind you of home.</p>
    </div>
  );
}

function MotionP7() {
  return (
    <div className="absolute h-[78px] left-0 top-[352px] w-[584px]" data-name="motion.p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[554px] whitespace-pre-wrap">{`Every sandwich is made with love, carrying the memories of Vietnamese neighborhoods, family gatherings, and the warmth of our heritage. We're not just serving food - we're serving memories.`}</p>
    </div>
  );
}

function MotionDiv71() {
  return (
    <div className="absolute h-[430px] left-0 top-0 w-[584px]" data-name="motion.div">
      <MotionH2 />
      <Container8 />
      <MotionP5 />
      <MotionP6 />
      <MotionP7 />
    </div>
  );
}

function MotionImg6() {
  return (
    <div className="absolute h-[389.086px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[584px]" data-name="motion.img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgMotionImg6} />
      </div>
    </div>
  );
}

function P23() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#1a5633] text-[48px] top-[0.5px] tracking-[0.3516px]">200+</p>
    </div>
  );
}

function P24() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#1a5633] text-[12px] top-px tracking-[0.6px]">YEARS OF TRADITION</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#fdb714] content-stretch flex flex-col gap-[8px] h-[120px] items-start left-[-24px] pt-[24px] px-[24px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-[293.09px] w-[188.891px]" data-name="Container">
      <P23 />
      <P24 />
    </div>
  );
}

function MotionDiv72() {
  return (
    <div className="absolute h-[389.086px] left-[632px] top-[20.45px] w-[584px]" data-name="motion.div">
      <MotionImg6 />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[430px] relative shrink-0 w-full" data-name="Container">
      <MotionDiv71 />
      <MotionDiv72 />
    </div>
  );
}

function H10() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[137px] w-[318px]" data-name="h3">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[159.09px] not-italic text-[20px] text-black text-center top-0 tracking-[0.0508px]">Made with Love</p>
    </div>
  );
}

function P25() {
  return (
    <div className="absolute h-[68.25px] left-[33px] top-[181px] w-[318px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[159.01px] not-italic text-[#4a5565] text-[14px] text-center top-px tracking-[-0.1504px] w-[272px] whitespace-pre-wrap">Every ingredient is carefully selected and prepared with the same love and care as a home-cooked meal</p>
    </div>
  );
}

function Heart() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Heart">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.6667 33.3333">
            <path d={svgPaths.p35de2640} id="Vector" stroke="var(--stroke-0, #013A0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] size-[40px] top-[20px]" data-name="div">
      <Heart />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute left-[152px] overflow-clip size-[80px] top-[33px]" data-name="Container">
      <Div28 />
    </div>
  );
}

function MotionDiv73() {
  return (
    <div className="bg-[#fcaf15] col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="motion.div">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <H10 />
      <P25 />
      <Container11 />
    </div>
  );
}

function H11() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[137px] w-[318px]" data-name="h3">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[158.91px] not-italic text-[20px] text-black text-center top-0 tracking-[0.0508px]">Authentic Recipe</p>
    </div>
  );
}

function P26() {
  return (
    <div className="absolute h-[68.25px] left-[33px] top-[181px] w-[318px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[159.2px] not-italic text-[#4a5565] text-[14px] text-center top-px tracking-[-0.1504px] w-[304px] whitespace-pre-wrap">Traditional Vietnamese recipes passed down through generations, maintaining the true taste of Saigon</p>
    </div>
  );
}

function Award() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Award">
      <div className="absolute inset-[53.71%_29.17%_8.34%_29.18%]" data-name="Vector">
        <div className="absolute inset-[-10.98%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9947 18.5158">
            <path d={svgPaths.p20d8380} id="Vector" stroke="var(--stroke-0, #013A0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 23.3333">
            <path d={svgPaths.p36b4c300} id="Vector" stroke="var(--stroke-0, #013A0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] size-[40px] top-[20px]" data-name="div">
      <Award />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute left-[152px] overflow-clip size-[80px] top-[33px]" data-name="Container">
      <Div29 />
    </div>
  );
}

function MotionDiv74() {
  return (
    <div className="bg-[#fcaf15] col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="motion.div">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <H11 />
      <P26 />
      <Container12 />
    </div>
  );
}

function H12() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[137px] w-[318px]" data-name="h3">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[159.69px] not-italic text-[20px] text-black text-center top-0 tracking-[0.0508px]">Fresh Daily</p>
    </div>
  );
}

function P27() {
  return (
    <div className="absolute h-[68.25px] left-[33px] top-[181px] w-[318px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[159.09px] not-italic text-[#4a5565] text-[14px] text-center top-px tracking-[-0.1504px] w-[257px] whitespace-pre-wrap">Fresh baguettes baked every morning, vegetables pickled in-house, and meats prepared daily</p>
    </div>
  );
}

function Utensils() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Utensils">
      <div className="absolute inset-[8.33%_54.17%_54.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 18.3333">
            <path d={svgPaths.p32545000} id="Vector" stroke="var(--stroke-0, #013A0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_70.83%_8.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-5%_-1.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 36.6667">
            <path d="M1.66667 1.66667V35" id="Vector" stroke="var(--stroke-0, #013A0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_8.33%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 36.6667">
            <path d={svgPaths.p4353900} id="Vector" stroke="var(--stroke-0, #013A0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] size-[40px] top-[20px]" data-name="div">
      <Utensils />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute left-[152px] overflow-clip size-[80px] top-[33px]" data-name="Container">
      <Div30 />
    </div>
  );
}

function MotionDiv75() {
  return (
    <div className="bg-[#fcaf15] col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="motion.div">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <H12 />
      <P27 />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[282.25px] relative shrink-0 w-full" data-name="Container">
      <MotionDiv73 />
      <MotionDiv74 />
      <MotionDiv75 />
    </div>
  );
}

function Div27() {
  return (
    <div className="h-[792.25px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[80px] items-start px-[32px] relative size-full">
        <Container7 />
        <Container10 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#f9fafb] h-[952.25px] relative shrink-0 w-full" data-name="section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[80px] px-[39.5px] relative size-full">
          <Div27 />
        </div>
      </div>
    </div>
  );
}

function H13() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[1216px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-[608.13px] not-italic text-[60px] text-black text-center top-[0.5px] tracking-[1.7637px]">OUR LOCATIONS</p>
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[#fdb714] h-[4px] left-[560px] top-[76px] w-[96px]" data-name="Container" />;
}

function P28() {
  return (
    <div className="absolute h-[28px] left-[272px] top-[104px] w-[672px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[336.89px] not-italic text-[#4a5565] text-[18px] text-center top-0 tracking-[-0.4395px]">Visit us at any of our locations across the United States</p>
    </div>
  );
}

function MotionDiv76() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="motion.div">
      <H13 />
      <Container14 />
      <P28 />
    </div>
  );
}

function H14() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[33px] w-[318px]" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-black top-0 tracking-[0.0508px]">Westminster - Little Saigon</p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MapPin">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function P29() {
  return (
    <div className="absolute h-[20px] left-[32px] top-0 w-[262.172px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">9200 Bolsa Ave, Westminster, CA 92683</p>
    </div>
  );
}

function MotionDiv77() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="motion.div">
      <MapPin />
      <P29 />
    </div>
  );
}

function Phone1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_2361)" id="Phone">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_8_2361">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function A() {
  return (
    <div className="h-[20px] relative shrink-0 w-[101.516px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">(714) 555-0100</p>
      </div>
    </div>
  );
}

function MotionDiv78() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="motion.div">
      <Phone1 />
      <A />
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Clock">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_2368)" id="Clock">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_8_2368">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function P30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[138.586px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Mon-Sun: 7AM - 9PM</p>
      </div>
    </div>
  );
}

function MotionDiv79() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="motion.div">
      <Clock1 />
      <P30 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[96px] items-start left-[33px] top-[85px] w-[318px]" data-name="Container">
      <MotionDiv77 />
      <MotionDiv78 />
      <MotionDiv79 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[63.5px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[0.5496px]">GET DIRECTIONS</p>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center justify-center left-0 top-[12px] w-[318px]" data-name="span">
      <Navigation />
      <Text />
    </div>
  );
}

function MotionButton5() {
  return (
    <div className="absolute bg-[#1a5633] h-[44px] left-[33px] overflow-clip top-[205px] w-[318px]" data-name="motion.button">
      <Span4 />
    </div>
  );
}

function MotionDiv80() {
  return <div className="absolute bg-[#fdb714] h-[4px] left-px top-px w-[382px]" data-name="motion.div" />;
}

function Container16() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <H14 />
      <Container17 />
      <MotionButton5 />
      <MotionDiv80 />
    </div>
  );
}

function H15() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[33px] w-[318px]" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-black top-0 tracking-[0.0508px]">San Jose</p>
    </div>
  );
}

function MapPin1() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MapPin">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function P31() {
  return (
    <div className="absolute h-[20px] left-[32px] top-0 w-[247.305px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">2850 S White Rd, San Jose, CA 95148</p>
    </div>
  );
}

function MotionDiv81() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="motion.div">
      <MapPin1 />
      <P31 />
    </div>
  );
}

function Phone2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_2361)" id="Phone">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_8_2361">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function A1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[106.766px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">(408) 555-0200</p>
      </div>
    </div>
  );
}

function MotionDiv82() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="motion.div">
      <Phone2 />
      <A1 />
    </div>
  );
}

function Clock2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Clock">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_2368)" id="Clock">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_8_2368">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function P32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[138.586px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Mon-Sun: 7AM - 9PM</p>
      </div>
    </div>
  );
}

function MotionDiv83() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="motion.div">
      <Clock2 />
      <P32 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[96px] items-start left-[33px] top-[85px] w-[318px]" data-name="Container">
      <MotionDiv81 />
      <MotionDiv82 />
      <MotionDiv83 />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[63.5px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[0.5496px]">GET DIRECTIONS</p>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center justify-center left-0 top-[12px] w-[318px]" data-name="span">
      <Navigation1 />
      <Text1 />
    </div>
  );
}

function MotionButton6() {
  return (
    <div className="absolute bg-[#1a5633] h-[44px] left-[33px] overflow-clip top-[205px] w-[318px]" data-name="motion.button">
      <Span5 />
    </div>
  );
}

function MotionDiv84() {
  return <div className="absolute bg-[#fdb714] h-[4px] left-px top-px w-[382px]" data-name="motion.div" />;
}

function Container18() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <H15 />
      <Container19 />
      <MotionButton6 />
      <MotionDiv84 />
    </div>
  );
}

function H16() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[33px] w-[318px]" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-black top-0 tracking-[0.0508px]">Houston</p>
    </div>
  );
}

function MapPin2() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MapPin">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function P33() {
  return (
    <div className="absolute h-[20px] left-[32px] top-0 w-[253.57px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">11209 Bellaire Blvd, Houston, TX 77072</p>
    </div>
  );
}

function MotionDiv85() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="motion.div">
      <MapPin2 />
      <P33 />
    </div>
  );
}

function Phone3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_2361)" id="Phone">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_8_2361">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function A2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[104.211px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">(281) 555-0300</p>
      </div>
    </div>
  );
}

function MotionDiv86() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="motion.div">
      <Phone3 />
      <A2 />
    </div>
  );
}

function Clock3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Clock">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_2368)" id="Clock">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #FDB714)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_8_2368">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function P34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[138.586px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Mon-Sun: 7AM - 9PM</p>
      </div>
    </div>
  );
}

function MotionDiv87() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="motion.div">
      <Clock3 />
      <P34 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[96px] items-start left-[33px] top-[85px] w-[318px]" data-name="Container">
      <MotionDiv85 />
      <MotionDiv86 />
      <MotionDiv87 />
    </div>
  );
}

function Navigation2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[63.5px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[0.5496px]">GET DIRECTIONS</p>
      </div>
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center justify-center left-0 top-[12px] w-[318px]" data-name="span">
      <Navigation2 />
      <Text2 />
    </div>
  );
}

function MotionButton7() {
  return (
    <div className="absolute bg-[#1a5633] h-[44px] left-[33px] overflow-clip top-[205px] w-[318px]" data-name="motion.button">
      <Span6 />
    </div>
  );
}

function MotionDiv88() {
  return <div className="absolute bg-[#fdb714] h-[4px] left-px top-px w-[382px]" data-name="motion.div" />;
}

function Container20() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <H16 />
      <Container21 />
      <MotionButton7 />
      <MotionDiv88 />
    </div>
  );
}

function Container15() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[282px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function MotionDiv90() {
  return (
    <div className="h-[128px] relative w-full" data-name="motion.div">
      <div aria-hidden="true" className="absolute border-4 border-[#fdb714] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Div32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[278px] items-start left-0 opacity-10 overflow-clip pl-[1029.96px] pr-[21.96px] pt-[21.96px] top-0 w-[1216px]" data-name="div">
      <div className="flex h-[176.43px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.02deg] w-full">
          <MotionDiv90 />
        </div>
      </div>
    </div>
  );
}

function MotionH3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="motion.h3">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[560.07px] not-italic text-[36px] text-center text-white top-[0.5px] tracking-[1.2691px]">{`QUESTIONS? WE'D LOVE TO HEAR FROM YOU!`}</p>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Mail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Mail">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Span7() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[88px] not-italic text-[16px] text-center text-white top-[-0.5px] tracking-[-0.3125px]">hello@kingbanhmi.com</p>
      </div>
    </div>
  );
}

function MotionA2() {
  return (
    <div className="h-[58px] relative shrink-0 w-[258.93px]" data-name="motion.a">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[25px] py-px relative size-full">
        <Mail />
        <Span7 />
      </div>
    </div>
  );
}

function Phone4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8_2400)" id="Phone">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_8_2400">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span8() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[62px] not-italic text-[16px] text-center text-white top-[-0.5px] tracking-[-0.3125px]">(800) 555-0100</p>
      </div>
    </div>
  );
}

function MotionA3() {
  return (
    <div className="h-[58px] relative shrink-0 w-[205.906px]" data-name="motion.a">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[25px] py-px relative size-full">
        <Phone4 />
        <Span8 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[48px] items-center justify-center pr-[0.008px] relative size-full">
          <MotionA2 />
          <MotionA3 />
        </div>
      </div>
    </div>
  );
}

function P35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[560.76px] not-italic text-[#99a1af] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">Follow us on social media for special offers and new menu items</p>
    </div>
  );
}

function Div33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[278px] items-start left-0 pt-[48px] px-[48px] top-0 w-[1216px]" data-name="div">
      <MotionH3 />
      <Container22 />
      <P35 />
    </div>
  );
}

function MotionDiv89() {
  return (
    <div className="bg-[#013a0f] h-[278px] overflow-clip relative shrink-0 w-full" data-name="motion.div">
      <Div32 />
      <Div33 />
    </div>
  );
}

function Div31() {
  return (
    <div className="h-[820px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[32px] relative size-full">
        <MotionDiv76 />
        <Container15 />
        <MotionDiv89 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-white h-[980px] relative shrink-0 w-full" data-name="section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[80px] px-[39.5px] relative size-full">
          <Div31 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col h-[5064.25px] items-start relative shrink-0 w-full" data-name="main">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function MotionDiv91() {
  return <div className="bg-[#101010] blur-[64px] h-[273.423px] rounded-[16777200px] shrink-0 w-full" data-name="motion.div" />;
}

function Div34() {
  return (
    <div className="absolute content-stretch flex flex-col h-[338.5px] items-start left-0 opacity-5 overflow-clip pl-[331.038px] pr-[754.538px] pt-[71.289px] top-0 w-[1359px]" data-name="div">
      <MotionDiv91 />
    </div>
  );
}

function H17() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[592px]" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101010] text-[24px] top-0 tracking-[1.2703px]">KING BANH MI</p>
    </div>
  );
}

function P36() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[48px] w-[592px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#101010] text-[14px] top-px tracking-[-0.1504px] w-[587px] whitespace-pre-wrap">Bringing the authentic taste of Saigon to the Vietnamese community in America. Made with love, served with pride.</p>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[11px]" data-name="social.icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="social.icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, #FCAF15)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function MotionA4() {
  return (
    <div className="absolute bg-[#013a0f] border border-[#013a0f] border-solid left-0 overflow-clip size-[40px] top-0" data-name="motion.a">
      <SocialIcon />
    </div>
  );
}

function SocialIcon1() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[11px]" data-name="social.icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8_2346)" id="social.icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #FCAF15)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, #FCAF15)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #FCAF15)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8_2346">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MotionA5() {
  return (
    <div className="absolute bg-[#013a0f] border border-[#013a0f] border-solid left-[56px] overflow-clip size-[40px] top-0" data-name="motion.a">
      <SocialIcon1 />
    </div>
  );
}

function SocialIcon2() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[11px]" data-name="social.icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="social.icon">
          <path d={svgPaths.p36786300} id="Vector" stroke="var(--stroke-0, #FCAF15)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function MotionA6() {
  return (
    <div className="absolute bg-[#013a0f] border border-[#013a0f] border-solid left-[112px] overflow-clip size-[40px] top-0" data-name="motion.a">
      <SocialIcon2 />
    </div>
  );
}

function SocialIcon3() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[11px]" data-name="social.icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="social.icon">
          <path d={svgPaths.p2d614500} id="Vector" stroke="var(--stroke-0, #FCAF15)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3657f7c0} id="Vector_2" stroke="var(--stroke-0, #FCAF15)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function MotionA7() {
  return (
    <div className="absolute bg-[#013a0f] border border-[#013a0f] border-solid left-[168px] overflow-clip size-[40px] top-0" data-name="motion.a">
      <SocialIcon3 />
    </div>
  );
}

function Div36() {
  return (
    <div className="absolute h-[40px] left-0 top-[117.5px] w-[592px]" data-name="div">
      <MotionA4 />
      <MotionA5 />
      <MotionA6 />
      <MotionA7 />
    </div>
  );
}

function MotionDiv92() {
  return (
    <div className="absolute h-[157.5px] left-0 top-0 w-[592px]" data-name="motion.div">
      <H17 />
      <P36 />
      <Div36 />
    </div>
  );
}

function H18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[0.5496px]">QUICK LINKS</p>
    </div>
  );
}

function MotionA8() {
  return (
    <div className="absolute h-[20px] left-0 top-[3px] w-[38.242px]" data-name="motion.a">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">Home</p>
    </div>
  );
}

function MotionLi() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="motion.li">
      <MotionA8 />
    </div>
  );
}

function MotionA9() {
  return (
    <div className="absolute h-[20px] left-0 top-[3px] w-[35.977px]" data-name="motion.a">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">Menu</p>
    </div>
  );
}

function MotionLi1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="motion.li">
      <MotionA9 />
    </div>
  );
}

function MotionA10() {
  return (
    <div className="absolute h-[20px] left-0 top-[3px] w-[62.07px]" data-name="motion.a">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">Our Story</p>
    </div>
  );
}

function MotionLi2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="motion.li">
      <MotionA10 />
    </div>
  );
}

function MotionA11() {
  return (
    <div className="absolute h-[20px] left-0 top-[3px] w-[62.398px]" data-name="motion.a">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">Locations</p>
    </div>
  );
}

function MotionLi3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="motion.li">
      <MotionA11 />
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="ul">
      <MotionLi />
      <MotionLi1 />
      <MotionLi2 />
      <MotionLi3 />
    </div>
  );
}

function MotionDiv93() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[157.5px] items-start left-[624px] top-0 w-[280px]" data-name="motion.div">
      <H18 />
      <Ul />
    </div>
  );
}

function H19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[0.5496px]">HOURS</p>
    </div>
  );
}

function Li() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[280px]" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">Monday - Friday</p>
    </div>
  );
}

function Li1() {
  return (
    <div className="absolute h-[20px] left-0 top-[28px] w-[280px]" data-name="li">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">7:00 AM - 9:00 PM</p>
    </div>
  );
}

function Li2() {
  return (
    <div className="absolute h-[20px] left-0 top-[60px] w-[280px]" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">Saturday - Sunday</p>
    </div>
  );
}

function Li3() {
  return (
    <div className="absolute h-[20px] left-0 top-[88px] w-[280px]" data-name="li">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">7:00 AM - 9:00 PM</p>
    </div>
  );
}

function Ul1() {
  return (
    <div className="h-[108px] relative shrink-0 w-full" data-name="ul">
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
    </div>
  );
}

function MotionDiv94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[157.5px] items-start left-[936px] top-0 w-[280px]" data-name="motion.div">
      <H19 />
      <Ul1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[157.5px] relative shrink-0 w-full" data-name="Container">
      <MotionDiv92 />
      <MotionDiv93 />
      <MotionDiv94 />
    </div>
  );
}

function P37() {
  return (
    <div className="h-[20px] relative shrink-0 w-[267.383px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">© 2026 King Banh Mi. All rights reserved.</p>
      </div>
    </div>
  );
}

function MotionA12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[89.391px]" data-name="motion.a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function MotionA13() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="motion.a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">Terms of Service</p>
      </div>
    </div>
  );
}

function MotionA14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72.414px]" data-name="motion.a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101010] text-[14px] top-[0.5px] tracking-[-0.1504px]">Contact Us</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[318.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <MotionA12 />
        <MotionA13 />
        <MotionA14 />
      </div>
    </div>
  );
}

function Div37() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="div">
      <P37 />
      <Container24 />
    </div>
  );
}

function MotionDiv95() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start pt-[33px] relative shrink-0 w-full" data-name="motion.div">
      <div aria-hidden="true" className="absolute border-[#101010] border-solid border-t inset-0 pointer-events-none" />
      <Div37 />
    </div>
  );
}

function Div35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[242.5px] items-start left-[39.5px] px-[32px] top-[48px] w-[1280px]" data-name="div">
      <Container23 />
      <MotionDiv95 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#c6c6c6] h-[338.5px] overflow-clip relative shrink-0 w-full" data-name="footer">
      <Div34 />
      <Div35 />
    </div>
  );
}

function Div1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[907px] items-start relative shrink-0 w-full" data-name="div">
      <Main />
      <Footer />
    </div>
  );
}

export default function ThayDiThitKThngHiu() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Thay đổi thiết kế thương hiệu">
      <MotionHeader />
      <Div1 />
    </div>
  );
}