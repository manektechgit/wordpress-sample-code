<!-- Testimonial Section -->

<section class="testimonial" id="testimonial_sec">
    <div class="container-fluid">

        <div class="row">

          <div class="col-sm-12 pr-0 pl-4">

              <div class="tophead">

                <?php if ( $header_title = get_sub_field( 'header_title' ) ) : ?>
                  <div class="head">
                    <h3><?php echo esc_html( $header_title ); ?></h3>
                  </div>
                <?php endif; ?>

                <div class="swiper-buttons">

                  <div class="swiper-button-prev"><i class="fal fa-arrow-left"></i></div>

                    <div class="swiper-button-next"><i class="fal fa-arrow-right"></i></div>                    

                </div>

              </div>

              <div class="testimonial_slider">
                  <div class="swiper testimonialslider">
                    <div class="swiper-wrapper">
                      <?php if ( have_rows( 'testimonial_data' ) ) : ?>
                        <?php while ( have_rows( 'testimonial_data' ) ) :
                          the_row(); ?>
                          <div class="swiper-slide">
                            <div class="testimonial_box">
                              <?php if ( $testimonial_content = get_sub_field( 'testimonial_content' ) ) : ?>
                                <p><?php echo $testimonial_content; ?></p>
                              <?php endif; ?>
                              <?php if ( $rating = get_sub_field( 'rating' ) ) : ?>
                                <ul class="test_star">
                                <?php while($rating-- >0): ?>
                                  <li><img src="<?php echo IMG_PATH; ?>review_star.svg" alt="star" /></li>
                                <?php endwhile;?>
                                </ul>
                              <?php endif; ?>
                            </div>
                          </div>
                        <?php endwhile; ?>
                      <?php endif; ?>
                    </div>
                  <!-- <div class="swiper-pagination"></div> -->
                </div>               
              </div>
          </div>
        </div>
    </div>
</section>

<!-- Testimonial Section -->