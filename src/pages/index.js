export default function Home() {
  return (
    <>
      {/* <!-- Header --> */}
      <section className="h-100 w-100 bg-white" id="header">
        <div className="container-xxl mx-auto p-0  position-relative header-2-2">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="#">
              <img src="/image/Logo.svg" alt="" />
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#targetModal-item"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="modal-item modal fade"
              id="targetModal-item"
              tabindex="-1"
              role="dialog"
              aria-labelledby="targetModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content bg-white border-0">
                  <div className="modal-header border-0">
                    <a className="modal-title" id="targetModalLabel">
                      <img src="/image/Logo.svg" alt="" />
                    </a>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                      <li className="nav-item ">
                        <a className="nav-link" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#spesial">
                          Layanan
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#portofolio">
                          Portofolio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tentang">
                          Tentang Kami
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tim">
                          Tim Kami
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#kontak">
                          Kontak Kami
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#spesial">
                    Layanan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portofolio">
                    Portofolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tentang">
                    Tentang Kami
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tim">
                    Tim Kami
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#kontak">
                    Kontak Kami
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* <!-- Hero --> */}
          <div>
            <div className="mx-auto d-flex flex-lg-row flex-column hero">
              <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center my-auto">
                <p className="text-caption"></p>
                <img src="/image/Vector.svg" alt="" />
                <h5 className="title-text-big">
                  Mari Buat Hidup Anda Lebih Mudah Dengan Digiponic
                </h5>
                <p className="text-caption">
                  Kami adalah perusahaan teknologi <br /> informasi yang berada
                  di malang dengan memberikan layanan berkualitas kepada
                  pelanggan.
                </p>
              </div>

              <div className="right-column text-center d-flex justify-content-center pe-0">
                <img
                  id="img-fluid"
                  className="h-auto mw-100"
                  src="/image/digiponic.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Spesial --> */}
      <section className="h-100 w-100" id="spesial">
        <div className="content-3-7 overflow-hidden container-xxl mx-auto position-relative">
          <div className="container mx-auto ">
            <div className="d-flex flex-column text-center w-100 pt-2">
              <p className="caption-text mx-auto">
                Apa layanan yang kita lakukan?
              </p>
              <h2 className="title-text">Spesialisasi Kami</h2>
            </div>

            <div className="d-flex justify-content-center row row-cols-1 row-cols-md-3 mb-3">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex text-muted pt-3">
                      <img
                        src="/image/web.svg"
                        alt=""
                        width="48px"
                        height="48px"
                        className="p-1"
                      />
                      <p className="pb-3 mb-0 small lh-sm price-duration">
                        <strong className="d-block price-title">
                          Web Development
                        </strong>
                      </p>
                    </div>
                    <div className="price-list">
                      <p className="d-flex align-items-center check">
                        Website menjadi garda terdepan sebuah perusahaan. Dengan
                        tenaga ahli yang berpengalaman, kami siap mengembangkan
                        website yang lebih interaktif dan siap membantu
                        pengembangan bisnis Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex text-muted pt-3">
                      <img
                        src="/image/mobile.svg"
                        alt=""
                        width="48px"
                        height="48px"
                        className="p-1"
                      />
                      <p className="pb-3 mb-0 small lh-sm price-duration">
                        <strong className="d-block price-title">
                          Mobile Apps Development
                        </strong>
                      </p>
                    </div>
                    <div className="price-list">
                      <p className="d-flex align-items-center check">
                        Kami memiliki developer dan desainer yang siap membangun
                        aplikasi Anda. Dengan pengalaman yang ada, kami siap
                        membuat yang sesuai dengan kebutuhan bisnis Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center row row-cols-1 row-cols-md-3 mb-3">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex text-muted pt-3">
                      <img
                        src="/image/software.svg"
                        alt=""
                        width="48px"
                        height="48px"
                        className="p-1"
                      />
                      <p className="pb-3 mb-0 small lh-sm price-duration">
                        <strong className="d-block price-title">
                          Sistem Otomasi
                        </strong>
                      </p>
                    </div>
                    <div className="price-list">
                      <p className="d-flex align-items-center check">
                        Kami siap menyediakan sistem otomasi industri yang
                        komprehensif dan sepenuhnya di kustomisasi agar sesuai
                        dengan spesifikasi dan persyaratan produksi dari
                        pelanggan, karena tujuan utama adalah memberikan solusi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex text-muted pt-3">
                      <img
                        src="/image/web.svg"
                        alt=""
                        width="48px"
                        height="48px"
                        className="p-1"
                      />
                      <p className="pb-3 mb-0 small lh-sm price-duration">
                        <strong className="d-block price-title">
                          Software Development
                        </strong>
                      </p>
                    </div>
                    <div className="price-list">
                      <p className="d-flex align-items-center check">
                        Kami akan mengembangkan Sistem Informasi Manajemen
                        perusahaan Anda. Pelanggan akan mendapatkan data yang
                        tepat untuk menentukan langkah perusahaan kedepannya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-100 w-100" id="portofolio">
        <div className="content-3-7 overflow-hidden container-xxl mx-auto position-relative">
          <div className="container mx-auto">
            <div className="d-flex flex-column text-center w-100">
              <p className="caption-text mx-auto">Pekerjaan Kita</p>
              <h2 className="title-text">Portofolio Kami</h2>
            </div>

            <div
              id="carouselExampleControls2"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1">
                    <div className="col">
                      <div className="card shadow-sm">
                        <div className="front">
                          <img
                            src="/image/portofolio/halokes.png"
                            className="w-100 h-100"
                            alt="..."
                          />
                        </div>
                        <div className="back">
                          <div className="back-content middle">
                            <div className="sm">
                              <a href="https://digiponic.co.id/" target="#">
                                <i className="fas fa-globe"></i>
                              </a>
                              <a
                                href="https://www.instagram.com/digiponic.co.id/"
                                target="#"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <div className="front">
                          <img
                            src="/image/portofolio/halomeet.png"
                            className="w-100 h-100"
                            alt="..."
                          />
                        </div>
                        <div className="back">
                          <div className="back-content middle">
                            <div className="sm">
                              <a
                                href="http://halomeet.halokes.co.id/"
                                target="#"
                              >
                                <i className="fas fa-globe"></i>
                              </a>
                              <a
                                href="https://www.instagram.com/halokes.id/"
                                target="#"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <div className="front">
                          <img
                            src="/image/portofolio/haloteach.png"
                            className="w-100 h-100"
                            alt="..."
                          />
                        </div>
                        <div className="back">
                          <div className="back-content middle">
                            <div className="sm">
                              <a
                                href="http://haloteach.halokes.co.id/"
                                target="#"
                              >
                                <i className="fas fa-globe"></i>
                              </a>
                              <a
                                href="https://www.instagram.com/haloteach.id/"
                                target="#"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                              <a
                                href="https://www.youtube.com/channel/UCDltOYVRkrGTftpiUWgY9Hg"
                                target="#"
                              >
                                <i className="fab fa-youtube"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                    <div className="col">
                      <div className="card shadow-sm">
                        <div className="front">
                          <img
                            src="/image/portofolio/nitromax.png"
                            className="w-100 h-100"
                            alt="..."
                          />
                        </div>
                        <div className="back">
                          <div className="back-content middle">
                            <div className="sm">
                              <a
                                href="http://nitromax.digiponic.co.id/"
                                target="#"
                              >
                                <i className="fas fa-globe"></i>
                              </a>
                              <a
                                href="https://www.instagram.com/digiponic.co.id/"
                                target="#"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                              <a
                                href="https://www.youtube.com/channel/UCaAXpnUyvF97Bj6V4YPK7yA"
                                target="#"
                              >
                                <i className="fab fa-youtube"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <div className="front">
                          <img
                            src="/image/portofolio/osac.png"
                            className="w-100 h-100"
                            alt="..."
                          />
                        </div>
                        <div className="back">
                          <div className="back-content middle">
                            <div className="sm">
                              <a
                                href="http://dev.digiponic.co.id/osac_sistema/"
                                target="#"
                              >
                                <i className="fas fa-globe"></i>
                              </a>
                              <a
                                href="https://www.instagram.com/digiponic.co.id/"
                                target="#"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center pt-5">
              <div className="btn-group">
                <button
                  type="button"
                  className="carousel-control-prev mx-4"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="next"
                >
                  <span aria-hidden="true">
                    <img src="/image/prev.svg" />
                  </span>
                </button>
                <button
                  className="carousel-control-next mx-4"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="prev"
                >
                  <span aria-hidden="true">
                    <img src="/image/next.svg" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-100 w-100" id="tentang">
        <div className="header-2-2 overflow-hidden container-xxl mx-auto position-relative">
          <div className="container mx-auto">
            <div className="d-flex flex-column text-center w-100">
              <h2 className="title-text">Tentang</h2>
            </div>

            <div className="mx-auto d-flex flex-lg-row flex-column hero">
              <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center ">
                <p className="text-caption">
                  Digiponic merupakan perusahaan penyedia solusi teknologi
                  informasi yang berkantor pusat di Malang yang resmi berdiri
                  pada tahun 2017.
                </p>
                <h4 className="fw-bold">Visi</h4>
                <p className="text-caption">
                  Digiponic sebagai perusahaan teknologi kreatif, aplikasi dan
                  digital solution 5 besar di indonesia pada tahun 2025
                </p>
                <h4 className="fw-bold">Misi</h4>
                <ol>
                  <li>
                    <p className="text-caption">
                      Mengembangkan solusi digital untuk pelanggan & masyarakat
                      Indonesia khususnya dan dunia pada umumnya, baik dari segi
                      materi ataupun segi nilai manfaat.
                    </p>
                  </li>
                  <li>
                    <p className="text-caption">
                      Menjadikan Sumber Daya Manusia kreatif yang berintegritas
                      tinggi sebagai sokoguru utama kesinambungan perusahaan
                      secara jangka Panjang.
                    </p>
                  </li>
                  <li>
                    <p className="text-caption">
                      Memastikan keseimbangan profit untuk keberlangsungan
                      perusahaan dan pembiayaan riset teknologi untuk kompetisi
                      global.
                    </p>
                  </li>
                  <li>
                    <p className="text-caption">
                      Mengutamakan kerjasama dan kolaborasi dg berbagai individu
                      insan teknologi kreatif dan berbagai institusi kelas dunia
                      demi mewujudkan percepatan visi perusahaan.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="right-column text-center d-flex justify-content-center pe-0">
                <img
                  id="img-fluid"
                  className="h-auto mw-100 d-none d-sm-block"
                  src="/image/foto/digiponic3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Tim --> */}
      <section class="h-100 w-100" id="tim">
        <div class="content-3-7 overflow-hidden container-xxl mx-auto position-relative">
          <div class="container mx-auto">
            <div class="d-flex flex-column text-center w-100">
              <p class="caption-text mx-auto">Tim Kita</p>
              <h2 class="title-text">Tim Inti Kami</h2>
            </div>
            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch d-flex justify-content-center g-4 py-5">
              <div class="col">
                <div class="card card-cover  overflow-hidden text-white  rounded-5">
                  <div class="d-flex flex-column h-100 p-5 text-white text-shadow-1">
                    <div class="d-flex justify-content-center">
                      <img
                        src="/image/tim/1.png"
                        alt="Bootstrap"
                        width="203"
                        height="203"
                        class="rounded-circle"
                      />
                    </div>
                    <h2 class="fw-bold caption-text-2 text-center pt-3">
                      Deni Dwi Handoko
                    </h2>

                    <h2 class="price-duration text-center pt-3">
                      Founder & CEO
                    </h2>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card card-cover  overflow-hidden text-white  rounded-5">
                  <div class="d-flex flex-column h-100 p-5 text-white text-shadow-1">
                    <div class="d-flex justify-content-center">
                      <img
                        src="/image/tim/tim2.svg"
                        alt="Bootstrap"
                        width="203"
                        height="203"
                        class="rounded-circle"
                      />
                    </div>
                    <h2 class="fw-bold caption-text-2 text-center pt-3">
                      Bagus Kristomoyo Kristanto
                    </h2>

                    <h2 class="price-duration text-center pt-3">
                      Co-Founder & CTO
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-center pb-5">
              <img src="/image/tim/foto_team2.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Tim End --> */}

      {/* <!-- Kontak --> */}
      <section class="h-100 w-100" id="kontak">
        <div class="content-3-7 overflow-hidden container-xxl mx-auto position-relative">
          <div class="container mx-auto">
            <div class="d-flex flex-column text-center w-100">
              <h2 class="title-text">Kontak Kami</h2>
            </div>

            <div class="container px-4 py-4">
              <div class="row gx-5">
                <div class="col">
                  <div class="p-3 ">
                    <h4>Kontak Informasi</h4>
                    <div class="jalan pt-5">
                      <div class="d-inline pe-2">
                        <div class="d-flex">
                          <img src="/image/hubungi/lokasi.svg" class=" pe-2" />
                          <p class="mb-0 small lh-sm price-duration">
                            Jl. Perusahaan Raya no. 27 Bodosari, Tanjungtirto,
                            Bodosari, Kabupaten, Kec. Singosari, Kabupaten
                            Malang, Jawa Timur 65153
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="tlpn">
                      <div class="d-inline pe-2">
                        <div class="d-flex">
                          <img src="/image/hubungi/tlpn.svg" class="pe-2" />
                          <p class="mt-2 mb-0 small lh-sm price-duration">
                            081357853085
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="mailo">
                      <div class="d-inline pe-2">
                        <div class="d-flex">
                          <img src="/image/hubungi/email.svg" class="pe-2 " />
                          <p class="mt-2 mb-0 small lh-sm price-duration">
                            digiponic@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <a href="https://wa.me/6281357853085" target="#">
                      <div class="wa">
                        <div class="d-inline pe-2">
                          <div class="d-flex">
                            <img src="/image/hubungi/wa.svg" class="pe-2" />
                            <p class="mt-2 mb-0 small lh-sm price-duration">
                              081357853085
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col">
                  <div class="HubungiKami p-3">
                    <h4>Hubungi Kami</h4>
                    <form
                      action="<?= base_url('Contact/sendEmail') ?>"
                      class="row g-3 pt-5"
                      method="POST"
                    >
                      <div class="col-md-6">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="NamaLengkap"
                          placeholder="Nama Lengkap"
                        />
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          name="telp"
                          class="form-control"
                          id="Notlpn"
                          placeholder="No. Telp/WA"
                        />
                      </div>
                      <div class="col-12">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          id="Email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="col-12">
                        <input
                          type="text"
                          name="subject"
                          class="form-control"
                          id="Subjek"
                          placeholder="Subjek"
                        />
                      </div>
                      <div class="col-12">
                        <textarea
                          class="form-control"
                          name="message"
                          id="TextAreaPesan"
                          rows="4"
                          placeholder="Pesan"
                        ></textarea>
                      </div>
                      <div class="col-12 d-flex justify-content-end">
                        <button type="submit" class="btn btn-fill">
                          Kirim
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Kontak End --> */}

      {/* <!-- Footer --> */}
      <footer id="footer">
        <div class="container-fluid">
          <div class="copyright">
            &copy;2021
            <span>
              Digiponic - All rights reserved.
              <br />
              Develop by
            </span>
            <a href="#" id="digi">
              Digiponic.co.id
            </a>
          </div>

          <div class="credits">
            <div class="social-links">
              <a href="#" class="twitter">
                <img src="/image/Footer/Foot01.svg" />
              </a>
              <a
                href="https://www.facebook.com/digiponic.haloteach"
                class="facebook"
                target="#"
              >
                <img src="/image/Footer/Foot02.svg" />
              </a>
              <a
                href="https://www.instagram.com/digiponic.co.id/"
                class="instagram"
                target="#"
              >
                <img src="/image/Footer/Foot03.svg" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
