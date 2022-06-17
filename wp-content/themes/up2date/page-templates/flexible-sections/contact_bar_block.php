<?php

$sticky_logo = get_sub_field( 'sticky_logo' );

$sticky_logo_mobile = get_sub_field( 'sticky_logo_mobile' );

$sticky_bar_inline_cta = get_sub_field( 'sticky_bar_inline_cta' );

$sticky_bar_inline_cta_mobile = get_sub_field( 'sticky_bar_inline_cta_mobile' );

$sticky_bar_right_cta = get_sub_field( 'sticky_bar_right_cta' );

?>

<!-- contactline Section -->

<section class="contactline" id="contact_line">

    <div class="container">

        <div class="row">

            <div class="col-sm-5">

                <div class="linelogowrap">

                    <div class="linelogo">

                        <?php if ( $sticky_logo ) : ?>

                            <a href="<?php echo site_url();?>"><img class="desktop d-sm-none d-md-block d-lg-block d-xl-block" src="<?php echo esc_url( $sticky_logo['url'] ); ?>" alt="<?php echo esc_attr( $sticky_logo['alt'] ); ?>" /></a>

                        <?php endif; ?>

                        <?php

                        if ( $sticky_logo_mobile ) : ?>

                            <a href="<?php echo site_url();?>"><img class="mobile d-sm-block d-md-none d-lg-none d-xl-none" src="<?php echo esc_url( $sticky_logo_mobile['url'] ); ?>" alt="<?php echo esc_attr( $sticky_logo_mobile['alt'] ); ?>" /></a>

                        <?php endif; ?>

                    </div>

                    <div class="contactline_left">

                        <?php

                        if ( $sticky_bar_inline_cta ) :

                            $link_url = $sticky_bar_inline_cta['url'];

                            $link_title = $sticky_bar_inline_cta['title'];

                            $link_target = $sticky_bar_inline_cta['target'] ? $sticky_bar_inline_cta['target'] : '_self';

                            ?>

                            <div class="desktop_call">

                                <a class="left_btn_withaw" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?> <i class="fal fa-arrow-right"></i></a>

                            </div>                            

                        <?php endif; ?>

                        <?php

                        if ( $sticky_bar_inline_cta_mobile ) :

                            $link_url = $sticky_bar_inline_cta_mobile['url'];

                            $link_title = $sticky_bar_inline_cta_mobile['title'];

                            $link_target = $sticky_bar_inline_cta_mobile['target'] ? $sticky_bar_inline_cta_mobile['target'] : '_self';

                            ?>

                            <div class="mobile_call">

                                <a class="left_btn_withaw" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?> <i class="fal fa-arrow-right"></i></a>

                            </div>                            

                        <?php endif; ?>

                    </div>

                </div>

            </div>

            <?php

            if ( $sticky_bar_right_cta ) :

                $link_url = $sticky_bar_right_cta['url'];

                $link_title = $sticky_bar_right_cta['title'];

                $link_target = $sticky_bar_right_cta['target'] ? $sticky_bar_right_cta['target'] : '_self';

                ?>

                <div class="col-sm-7">

                    <div class="contactline_right">

                        <a class="right_btn_withaw" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><span><?php echo esc_html( $link_title ); ?> <i class="fal fa-arrow-right"></i></span></a>

                    </div>                            

                </div>                            

            <?php endif; ?>             

        </div>

    </div>

</section>

<!-- End contactline Section -->