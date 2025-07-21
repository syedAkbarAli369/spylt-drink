


const FooterSection = () => {
  return (
    <section className='footer-section'>
      <img src="/images/footer-dip.png" alt="footer" className='w-full object-cover -translate-y-1'/>

      <div className='2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]'>
        <div className='overflow-hidden z-10'>
          <h1 className='general-title text-center text-milk py-5'>#CHUGRESPONSIBLY</h1>
      </div>

      {}

      <div className='flex-center gap-5 relative z-10 md:mt-20 mt-5'>

        <div className='social-btn'>
          <img src="./images/yt.svg" alt="yt" />
        </div>
        <div className='social-btn'>
          <img src="./images/insta.svg" alt="insta" />
        </div>
        <div className='social-btn'>
          <img src="./images/tiktok.svg" alt="tiktok" />
        </div>

      </div>

      <div className='mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium'>
        <div className='flex items-center md:gap-15 gap-6'>
          <div>
            <p>SPYLT Flavors</p>
          </div>
          <div>
            <p>Chug Club</p>
            <p>Student Marketing</p>
            <p>Dairy Dealers</p>
          </div>
          <div>
            <p>Company</p>
            <p>Contacts</p>
            <p>Tasty Talk</p>
          </div>
        </div>

        <div>
          <p>
            Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!
          </p>
          <div>
            <input type="text" />
            <img src="/images/arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>


        <div className='copyright-box'>
          <p>Copyright © 2025 Cheel - All Rights Reserved</p>
          <div>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterSection