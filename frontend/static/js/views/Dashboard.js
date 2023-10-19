import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
                     
        <div class="flex justify-center">


        <!-- first card -->
              <div class="inline-flex align-items-start gap-11">

                    <!--  school details card container-->

                <div class="grid gap-6">

                     <!--  school details card -->

                  <div class="flex-col align-items-start sm:gap-6 gap-5 flex-col justify-center align-items-center rounded-[20px] bg-[#FFFFFF] shadow-lg py-9">

                      <div class="grid gap-6 pt-4 px-[14px]">
                          <div class="grid align-items-center gap-2 text-[#212121]">
                              <div class="flex-col justify-center align-items-center text-center leading-8 font-semibold md:text-[28px] sm:text-[18px] font-sans">school details card you cam put it here  just for demo</div>
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
                  
                 


                         
              </div>



                  <div class="hidden  lg:flex h-full shadow-2xl w-[361px]">

                           

                  </div>

              </div>

          </div>



        `;
    }
}