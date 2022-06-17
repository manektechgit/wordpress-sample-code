<!-- contact Section -->
<section class="contactus" id="contact_sec">
    <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6">
            <div class="con_left">
              <?php if ( have_rows( 'contact_details' ) ) : ?>
                <?php while ( have_rows( 'contact_details' ) ) :
                  the_row();
                  $show_contact_no = get_sub_field( 'show_contact_no' );
                  $show_email_address = get_sub_field( 'show_email_address' );
                  $show_address = get_sub_field( 'show_address' );
                  ?>
                  
                  <?php if ( $header_title = get_sub_field( 'header_title' ) ) : ?>
                    <h3><?php echo esc_html( $header_title ); ?></h3>
                  <?php endif; ?>

                  <div class="contact_number">
                    <?php if ( $show_contact_no == 'yes' ) :
                      if ( $contact_no = get_field( 'contact_no', 'options' ) ) : ?>
                        <div class="contact-link-wrapper">
									      <a class="contact-link call-number" href="<?php echo telURL(esc_html( $contact_no )); ?>"><?php echo esc_html( $contact_no ); ?> <i class="fal fa-arrow-up"></i></a>
                        </div>
    							    <?php endif; ?>
                    <?php endif; ?>
                  
                    <?php if ( $show_email_address == 'yes' ) :
                      if ( $email_id = get_field( 'email_id', 'options' ) ) : ?>
                        <div class="contact-link-wrapper">
                        <a class="contact-link" href="mailto:<?php echo esc_html( $email_id ); ?>"><span><?php echo esc_html( $email_id ); ?></span> <i class="fal fa-arrow-up"></i></a>
                        </div>
                      <?php endif; ?>
                    <?php endif; ?>
                  </div>

                  <?php if ( $show_address == 'yes' ) :
                    if ( $address = get_field( 'address', 'options' ) ) : ?>
                      <div class="contact_address">
                        <p>
                          <?php if ( $google_map_link = get_field( 'google_map_link', 'options' ) ) : ?>
                            <a href="<?php echo esc_url( $google_map_link ); ?>" target="_blank" Title="Go To Google Map" ><?php echo  $address; ?> <i class="fal fa-arrow-up"></i></a>
                          <?php else : ?>
                            <?php echo  $address; ?> <i class="fal fa-arrow-up"></i>
                          <?php endif; ?>
                        </p>
                    </div>
                    <?php endif; ?>
                  <?php endif; ?>

                <?php endwhile; ?>
              <?php endif; ?>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6">
            <div class="con_right">
              <?php if ( have_rows( 'contact_form_area' ) ) : ?>
                <?php while ( have_rows( 'contact_form_area' ) ) :
                  the_row(); ?>
                  
                  <?php if ( $header_title = get_sub_field( 'header_title' ) ) : ?>
                    <h3><?php echo esc_html( $header_title ); ?></h3>
                  <?php endif; ?>

                  <?php if ( $form_content = get_sub_field( 'form_content' ) ) : ?>
                    <?php echo $form_content; ?>
                  <?php endif; ?>

                <?php endwhile; ?>
              <?php endif; ?>               
            </div>
          </div>
        </div>
    </div>
</section>