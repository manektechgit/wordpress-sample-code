<!-- Hero Section -->

<section class="banner" id="header_banner">

    <div class="banner_canvas">

        <canvas width="100%" height="800" id="bannercanvas"></canvas>

        <div class="container banner_txwrap h-100">

          <div class="row h-100">

            <div class="col-sm-12 h-100">

                <div class="banner_txt">

                    <h1><?php if ( $header_title_line_1 = get_sub_field( 'header_title_line_1' ) ) : ?>

                        <?php echo esc_html( $header_title_line_1 ); ?><br>

                    <?php endif; ?>

                    <?php if ( $header_title_line_2_highlighted = get_sub_field( 'header_title_line_2_highlighted' ) ) : ?>

                        <span><?php echo esc_html( $header_title_line_2_highlighted ); ?></span>

                    <?php endif; ?>

                    <?php if ( $header_title_line_3 = get_sub_field( 'header_title_line_3' ) ) : ?>

                        <?php echo esc_html( $header_title_line_3 ); ?>

                    <?php endif; ?>

                    </h1>

                    <?php if ( have_rows( 'scroll_menu_links', 'options' ) ) : $count = 1;?>

                        <div class="banner_mobile_links">

                            <div class="d-sm-block d-md-block d-lg-none d-xl-none">

                                <div class="banner_mobile_txt">

                                    <ul class="navbar-nav ml-auto scroll-menu">

                                    <?php while ( have_rows( 'scroll_menu_links', 'options' ) ) :

                                        the_row(); ?>

                                        <?php

                                        $menu_item_title = get_sub_field( 'menu_item_title', 'options' ) ;

                                        $menu_item_link = get_sub_field( 'menu_item_link', 'options' ) ;

                                        $link_type = get_sub_field( 'link_type', 'options' ) ;
                                        $extra_class = $attr = '';
                                        if($link_type =='is_section_scroll'){
                                            $extra_class = 'section-scroll';
                                            $attr = 'data-target='.$menu_item_link;
                                        }
                                        if($link_type =='is_accordion'){
                                            $extra_class = 'accordion-scroll';
                                            $attr = 'data-target='.$menu_item_link;
                                        }
                                        if ( $menu_item_title && $menu_item_link) : ?>
                                            <li class="nav-item">
                                            <a class="nav-link <?php echo $extra_class;?>" href="<?php echo esc_url( $menu_item_link ); ?>" <?php echo $attr;?> data-menu-item="<?php echo $count++; ?>" ><?php echo esc_html( $menu_item_title ); ?></a>
                                            </li>
                                        <?php
                                        endif;
                                        ?>									

                                    <?php endwhile; ?>

                                    </ul>

                                </div>

                            </div>

                        </div>

                    <?php endif; ?>                              

                </div>

            </div>

          </div>

      </div>

    </div>

</section>

<!-- End Hero Section -->