import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("favoritos");
    }

    async getHtml() {
        return `
        
                
                <!-- hero frame -->

           <div class="flex justify-center">


          <!-- first card -->
                <div class="inline-flex align-items-start gap-11">

                  <div class="grid gap-6">

                 

                    <div class="flex-col align-items-start sm:gap-6 gap-5 flex-col justify-center align-items-center rounded-[20px] bg-[#FFFFFF] shadow-lg py-9">

                        <div class="grid gap-6 pt-4 px-[14px]">
                            <div class="grid align-items-center gap-2 text-[#212121]">
                                <div class="flex-col justify-center align-items-center text-center leading-8 font-semibold md:text-[28px] sm:text-[18px] font-sans">No has realizado ninguna solicitud a ningún centro</div>
                                <div class="flex-col text-center font-sans leading-8 md:text-[18px] sm:text-[14px]">Descubre todos los centros y contacta en un clic</div>
                            </div>
                            <div class="flex justify-center">
                                <button class="h-[62px] min-w-[294px] font-bold text-white bg-gradient-to-r from-[#21F7FD] to-[#2982FC] font-sans rounded-[200px] px-10 py-2">

                                <span class="flex align-items-center justify-center text-[#FFFFFF] text-xl font-bold leading-8 font-sans text-center my-auto">Ir al buscador</span>
                                </button>
                            </div>
                             </div>
                        

                    </div>









                    <!-- second card  -->
                    
                    <div class="flex flex-col-reverse sm:flex-row align-items-start sm:gap-[37px] sm:gap-[70px] gap-[37px] flex-col justify-center align-items-center rounded-[20px] bg-[#FFFFFF] shadow-lg sm:px-[40px] px-[22px] sm:py-[0px] py-[50px]">


                        <div class="grid gap-3 sm:max-w-full inline sm:py-9">
                
                            <div class="grid align-middle gap-3 items-center ">
                                <div class="font-semibold md:text-[28px] sm:text-[18px] flex justify-center font-sans leading-8"><span class="inline-block align-baseline">Conoce los colegios más afines a ti</span></div>
                                <div class="font-normal md:text-[18px] sm:text-[14px] flex justify-center font-sans leading-8">Te ofrecemos la oportunidad de realizar un sencillo test para recomendarte aquellos colegios más afines a lo que estás buscando para tus hijos. </div>
                
                            </div>
                            <div class="flex justify-center sm:justify-start">
                                <button class="h-[62px] min-w-[294px] font-bold text-white bg-gradient-to-r from-[#21F7FD] to-[#2982FC] font-sans rounded-[200px] px-10 py-2">

                                    <span class="flex align-items-center justify-center text-[#FFFFFF] text-xl font-bold leading-8 font-sans text-center my-auto">Hacer test de afinidad</span>
                                    </button>    
                            </div>
                
                        </div>
                        <div class="inline-flex justify-center align-items-center my-auto ">
                            <svg width="300px" height="257px" class="md:h-[240px] md:w-[275px] h-[162px] w-[190px]" viewBox="0 0 300 258" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect y="0.5" width="300" height="257" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_1692_2034" transform="scale(0.00448517 0.0052356)"/>
                            </pattern>
                            <image id="image0_1692_2034" width="223" height="191" xlink:href="data:image/png;base64,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"/>
                            </defs>
                            </svg>
                            
                
                        </div>
                
                    </div>


                           
                </div>



                    <div class="hidden  lg:flex h-full shadow-2xl w-[361px]">

                             

                    </div>

                </div>

            </div>


        
        `;
    }
}