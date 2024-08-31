import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer_unique">
        <video className="footer_video_unique" muted loop autoPlay src="//cdn.shopify.com/s/files/1/0526/6905/5172/t/5/assets/footer.mp4?v=29581141968431347981633714450" type="video/mp4"></video>

        <div className="container_unique">
          <div className="footer_inner_unique">
            <div className="c-footer_unique">
              <div className="layout_unique">
                <div className="layout_item_unique w-50_unique">
                  <div className="newsletter_unique">
                    <h3 className="newsletter_title_unique">Get updates on fun stuff you probably want to know about in your inbox.</h3>
                    <form action="" className="newsletter_form_unique">
                      <input type="text" placeholder="Email Address" className="newsletter_input_unique"/>
                      <button className="newsletter_button_unique">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="layout_item_unique w-25_unique">
                  <nav className="c-nav-tool_unique">
                    <h4 className="c-nav-tool_title_unique">Menu</h4>
                    <ul className="c-nav-tool_list_unique">
                      <li>
                        <Link to="/collections/all" className="c-link_unique">Shop All</Link>
                      </li>
                      <li>
                        <Link to="/pages/about-us" className="c-link_unique">About Us</Link>
                      </li>
                      <li>
                        <Link to="/blogs/community" className="c-link_unique">Community</Link>
                      </li>
                      <li>
                        <Link to="#" className="c-link_unique">Vibes</Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="layout_item_unique w-25_unique">
                  <nav className="c-nav-tool_unique">
                    <h4 className="c-nav-tool_title_unique">Support</h4>
                    <ul className="c-nav-tool_list_unique">
                      <li className="c-nav-tool_item_unique">
                        <Link to="/pages/shipping-returns" className="c-link_unique">Shipping &amp; Returns</Link>
                      </li>
                      <li className="c-nav-tool_item_unique">
                        <Link to="/pages/help" className="c-link_unique">Help &amp; FAQ</Link>
                      </li>
                      <li className="c-nav-tool_item_unique">
                        <Link to="/pages/terms-conditions" className="c-link_unique">Terms &amp; Conditions</Link>
                      </li>
                      <li className="c-nav-tool_item_unique">
                        <Link to="/pages/privacy-policy" className="c-link_unique">Privacy Policy</Link>
                      </li>
                      <li className="c-nav-tool_item_unique">
                        <Link to="/pages/contact" className="c-link_unique">Contact</Link>
                      </li>
                      <li className="c-nav-tool_item_unique">
                        <Link to="/account/login" className="c-link_unique">Login</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="layout_unique c-2_unique">
                <div className="layout_item_unique w-50_unique">
                  <ul className="flex_unique">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.654zm-.87-.582A7.783 7.783 0 0 0 8.4 12a7.783 7.783 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.783 7.783 0 0 0 15.6 12a7.783 7.783 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z" />
                      </svg>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z" />
                      </svg>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M15 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM2 2h4v20H2V2z" />
                      </svg>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.94 5H22v2H8.88L9.75 9h12.25V11H10.81l.87 2h10.57v2H12.74l1.06 2H22v2H14.67l1.12 3H13.25L6.94 5z" />
                      </svg>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 2.1C6.596 2.1 2.1 6.596 2.1 12c0 4.776 3.554 8.728 8.209 9.776v-6.925H8.587v-2.85h1.722V9.99c0-1.787 1.03-2.787 2.606-2.787.757 0 1.545.122 1.545.122v1.695h-.87c-.857 0-1.125.533-1.125 1.082v1.303h1.914l-.305 2.85h-1.61V21.77c4.655-1.048 8.209-5 8.209-9.775 0-5.404-4.496-9.9-9.9-9.9z" />
                      </svg>
                    </li>
                  </ul>
                </div>

                <div className="layout_item_unique w-50_unique text-right_unique">
                  <h3>Feelgoodz</h3>
                  <p>&copy; 2021. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
