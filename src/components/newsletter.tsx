import React from "react";

export default function Newsletter() {
  return (
    <div>
      <div className="mx-auto px-12 pt-4">
        <svg
          className="ml-4 h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="runningMan"
          width="100%"
          viewBox="0 0 534 436"
          enableBackground="new 0 0 534 436"
          xmlSpace="preserve"
        >
          <path
            fill="#010101"
            opacity="1.000000"
            stroke="none"
            d=" M86.859055,325.072876   C82.400108,324.770874 78.404320,324.570984 74.425438,324.193024   C61.312397,322.947479 52.281410,312.205627 53.011002,298.803680   C53.689472,286.340790 64.185493,276.190735 76.949570,276.936646   C93.065735,277.878510 109.116005,279.902557 125.210678,281.271973   C138.319565,282.387299 151.459732,283.135223 164.568298,284.253723   C167.737259,284.524139 169.590134,283.570526 171.689713,281.115112   C208.163300,238.460220 237.972397,191.135864 268.075287,144.012894   C271.565735,138.548889 275.116699,133.123535 279.093506,126.979012   C273.337769,125.710358 267.969391,124.491989 262.584473,123.351624   C258.517365,122.490334 254.201782,122.306122 250.395691,120.807480   C241.334763,117.239746 234.766663,120.108559 227.767563,126.345139   C213.726639,138.856384 198.978180,150.591736 184.261337,162.320587   C172.291351,171.860291 155.520294,165.569702 152.480331,150.600998   C151.043762,143.527298 153.059357,137.149460 158.573395,132.569946   C180.611084,114.267166 202.758392,96.093811 225.039520,78.088371   C231.229904,73.085907 238.421204,71.219231 246.586334,72.980209   C269.667603,77.958153 292.757233,82.935806 315.957855,87.307053   C329.734467,89.902725 339.175323,98.389992 347.628387,108.428940   C351.891144,113.491508 355.714539,119.030899 359.032623,124.762245   C369.442902,142.744080 379.643005,160.851471 389.618652,179.077667   C391.594116,182.686981 393.852966,183.794907 397.756226,183.846710   C418.082825,184.116531 438.407562,184.584366 458.729614,185.111923   C473.233429,185.488434 482.614685,198.508194 477.958038,211.583145   C475.162292,219.433090 467.949860,224.839233 459.147064,224.683685   C430.326569,224.174423 401.509033,223.453964 372.695221,222.641876   C364.513977,222.411301 358.735291,218.088470 354.788177,210.955811   C347.722656,198.188065 340.481537,185.517502 332.888000,172.051178   C315.767365,198.249329 299.028259,223.863693 282.152649,249.686874   C301.627472,263.641693 320.827759,277.407532 340.036621,291.161469   C353.983337,301.147614 356.828247,313.074860 348.853668,328.432648   C335.223389,354.682434 321.615021,380.943817 307.898804,407.148682   C303.423401,415.698914 296.277802,420.315674 286.485901,420.030273   C277.382233,419.764954 270.647339,415.325256 266.536041,407.253571   C262.770142,399.860107 263.536224,392.515533 267.329468,385.254089   C278.562286,363.751038 289.703369,342.200073 301.212158,320.028595   C279.722870,304.858246 258.174713,289.646332 236.108047,274.068359   C234.916031,275.486267 233.655212,276.909027 232.478271,278.398071   C221.221542,292.639526 209.869919,306.807983 198.778900,321.177490   C193.323883,328.244934 186.419510,331.557587 177.592621,330.995514   C154.317764,329.513458 131.043747,328.017792 107.770546,326.509857   C100.955040,326.068268 94.143387,325.567261 86.859055,325.072876  z"
          />
          <path
            fill="#010101"
            opacity="1.000000"
            stroke="none"
            d=" M356.241516,104.833099   C339.802002,92.632790 332.945770,76.590508 337.478516,57.018852   C341.848969,38.147682 354.373413,26.519421 373.557098,22.786680   C397.248657,18.176785 420.309479,33.678337 425.696198,57.545757   C430.934814,80.756752 416.337494,104.961205 393.334442,110.886597   C380.294373,114.245621 367.952820,112.369987 356.241516,104.833099  z"
          />
        </svg>
        <p className="text-xl font-bold">Let&apos;s grow your club</p>
      </div>
      <div className="flex w-full flex-col justify-between gap-4 border-b-2 px-12 py-8 md:flex-row">
        <p className="mx-auto text-2xl font-bold">
          Join our newsletter to stay updated with us!
        </p>
        <label
          htmlFor="email"
          className="relative flex items-center justify-start overflow-hidden rounded-3xl border-2 border-zinc-400 px-8 py-3"
        >
          <svg
            className="absolute left-5 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="email"
            name="email"
            id="email"
            maxLength={50}
            placeholder="Enter your email"
            autoComplete="email"
            className="w-[24rem] pl-4 text-lg focus:outline-none"
          />
        </label>

        <button className="bg-secondary rounded-3xl border-2 border-black px-8 py-3 text-lg transition hover:bg-[hsl(46,48%,45%)]/80">
          Subscribe
        </button>
      </div>
    </div>
  );
}
