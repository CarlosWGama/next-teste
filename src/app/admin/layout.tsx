import { ReactNode, useEffect } from 'react';
import Image from 'next/image';
import HeaderLayout from './layout-components/header';
import NavLayout from './layout-components/nav-layout';
import Script from 'next/script'
import { NavHeaderLayout } from './layout-components/nav-header-layout';


export interface AdminTemplateProps {
    children: ReactNode
}

export default function AdminTemplate(props: AdminTemplateProps) {

    return (
    <div>
      
      {/* <!-- Pre-loader start --> */}
  <div className="theme-loader">
      <div className="loader-track">
          <div className="preloader-wrapper">
              <div className="spinner-layer spinner-blue">
                  <div className="circle-clipper left">
                      <div className="circle"></div>
                  </div>
                  <div className="gap-patch">
                      <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                      <div className="circle"></div>
                  </div>
              </div>
              <div className="spinner-layer spinner-red">
                  <div className="circle-clipper left">
                      <div className="circle"></div>
                  </div>
                  <div className="gap-patch">
                      <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                      <div className="circle"></div>
                  </div>
              </div>

              <div className="spinner-layer spinner-yellow">
                  <div className="circle-clipper left">
                      <div className="circle"></div>
                  </div>
                  <div className="gap-patch">
                      <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                      <div className="circle"></div>
                  </div>
              </div>

              <div className="spinner-layer spinner-green">
                  <div className="circle-clipper left">
                      <div className="circle"></div>
                  </div>
                  <div className="gap-patch">
                      <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                      <div className="circle"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  {/* <!-- Pre-loader end --> */}
        
        
        <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <nav className="navbar header-navbar pcoded-header">
                    <div className="navbar-wrapper">
                        <div className="navbar-logo">
                            <a className="mobile-menu waves-effect waves-light" id="mobile-collapse" href="#!">
                                <i className="ti-menu"></i>
                            </a>
                            <a href={"#"}>
                                <Image className="Image-fluid" src="/assets/images/logo.png" width="100" height="50" alt="MPPS" />
                            </a>
                            <a className="mobile-options waves-effect waves-light">
                                <i className="ti-more"></i>
                            </a>
                        </div>
                        <NavHeaderLayout />
                    </div>
                </nav>


                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">

                        {/* MENU LATERAL INICIO */}
                        <NavLayout />
                        {/* MENU LATERAL FIM */}

                        {/* CONTEUDO PRINCIPAL */}
                        <div className="pcoded-content">

                            {/* <!-- Page-header start --> */}
                            <HeaderLayout/>
                            {/* <!-- Page-header end --> */}


                            <div className="pcoded-inner-content">
                                {/* <!-- Main-body start --> */}
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        {/* <!-- Page-body start --> */}
                                        <div className="page-body">

                                            {props.children}

                                        </div>
                                        {/* <!-- Page-body end --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Warning Section Starts --> */}

        {/* <!-- Warning Section Ends --> */}

        {/* <!-- Required Jquery --> */}
        
        <Script type="text/javascript" src="/assets/js/jquery/jquery.min.js"/>
        {/* <Script type="text/javascript" src="/assets/js/jquery-ui/jquery-ui.min.js" /> */}
        {/* <Script type="text/javascript" src="/assets/js/popper.js/popper.min.js"/> */}
        <Script type="text/javascript" src="/assets/js/bootstrap/js/bootstrap.min.js" />
        {/* <!-- waves js --> */}
        <Script src="/assets/pages/waves/js/waves.min.js" />
        {/* <!-- jquery slimscroll js --> */}
        <Script type="text/javascript" src="/assets/js/jquery-slimscroll/jquery.slimscroll.js" />

        

        {/* <!-- menu js --> */}
        <Script src="/assets/js/pcoded.min.js" />
        <Script src="/assets/js/vertical/vertical-layout.min.js" />

        <Script type="text/javascript" src="/assets/js/script.min.js" />
        
         {/* 
        @if($tinyMCE)
        <Script src="/assets/js/tinymce/tinymce.min.js" referrerpolicy="origin"/>
        <script>
            tinymce.init({
                selector: '.tinymce',
                plugins: 'advlist autolink link image preview hr',
                images_upload_url: '{{route('admin.tinymce.upload',
                toolbar_mode: 'floating',
                language: 'pt_BR',
                relative_urls : false,
                remove_script_host : true,
                document_base_url : '{{url('',
                height: 480
        });
        </script>
        @endif */}

        </div>)
}   