<!-- partner Section -->
<section class="partner" id="partner_sec">
    <div class="container">
        <?php if ( $header_title = get_sub_field( 'header_title' ) ) : ?>
        <div class="row">
            <div class="col-sm-12">
                <div class="head">
                    <h3><?php echo esc_html( $header_title ); ?></h3>
                </div>
            </div>
        </div>
        <?php endif; ?>
        <?php if ( have_rows( 'partner_logos' ) ) : ?>
            <div class="row">
            <?php while ( have_rows( 'partner_logos' ) ) :
                the_row(); ?>
                <div class="col-lg-3 col-xl-3 col-sm-4">
                    <div class="partner-box">
                        <?php
                        $logo_image = get_sub_field( 'logo_image' );
                        if ( $logo_image ) : ?>
                            <img src="<?php echo esc_url( $logo_image['url'] ); ?>" alt="<?php echo esc_attr( $logo_image['alt'] ); ?>" />
                        <?php endif; ?>
                    </div>
                </div>
            <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
<!-- partner Section -->