<!-- Accordion Section -->
<?php if ( have_rows( 'accordion_data' ) ) : ?>
<section class="accordiantab" id="accordiantab_sec">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 p-0">
                <div class="accordion" id="service-accordion">
                    <?php
                    $count = 1;
                    while ( have_rows( 'accordion_data' ) ) :
                        the_row(); ?>
                        <div class="card <?php echo ($count==1) ? 'active' : '';?>">
                            <div class="card-header" id="homeaccordianhead<?php echo $count;?>" >
                                <?php $link_type = get_sub_field( 'link_type' ) ; ?>
                                <a class="btn btn-header-link <?php echo ($count==1) ? '' : 'collapsed' ;?>" data-toggle="collapse" data-target="#homeaccordianid<?php echo $count;?>"
                                aria-expanded="<?php echo ($count==1) ? 'true' : 'false' ;?>" aria-controls="homeaccordianid<?php echo $count;?>" style="background-color:<?php the_sub_field('header_color'); ?>" >
                                <?php if ( $header_title = get_sub_field( 'header_title' ) ) : ?>
                                    <h2><span><?php echo esc_html( $header_title ); ?></span></h2>
                                <?php endif; ?>
                                <?php if ( $header_description = get_sub_field( 'header_description' ) ) : ?>
                                    <p><?php echo $header_description; ?></p>
                                <?php endif; ?>
                                </a>
                            </div>
                            <div id="homeaccordianid<?php echo $count;?>" class="collapse <?php if($count==1) echo 'show';?>" aria-labelledby="homeaccordianhead<?php echo $count;?>" data-parent="#service-accordion">
                                <div class="card-body">
                                    <?php if ( $content_style = get_sub_field( 'content_display_style' ) == 'general-fullwidth' ) : ?>
                                        <?php if ( $general_full_width = get_sub_field( 'general_full-width' ) ) : ?>
                                            <div class="col-sm-12">
                                                <div class="simtxt">
                                                <?php echo $general_full_width; ?>
                                                </div>
                                            </div>
                                        <?php endif; ?>
                                    <?php elseif ( $content_style = get_sub_field( 'content_display_style' ) == 'descriptive' ) : ?>
                                        <?php if ( have_rows( 'descriptive_tab_content' ) ) : ?>
                                            <?php while ( have_rows( 'descriptive_tab_content' ) ) :
                                                the_row(); ?>
                                                <div class="col-sm-12">
                                                    <div class="head mr-auto w-75">
                                                        <?php if ( $header_title = get_sub_field( 'header_title' ) ) : ?>
                                                            <h3><?php echo esc_html( $header_title ); ?></h3>
                                                        <?php endif; ?>
                                                        <?php if ( $header_content = get_sub_field( 'header_content' ) ) : ?>
                                                            <h2><?php echo $header_content; ?></h2>
                                                        <?php endif; ?>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12">
                                                    <div class="work_boxes ml-auto w-75">
                                                        <?php if ( $detail_title = get_sub_field( 'detail_title' ) ) : ?>
                                                            <div class="head">
                                                                <h4><?php echo esc_html( $detail_title ); ?></h4>
                                                            </div>
                                                        <?php endif; ?>
                                                        <?php if ( have_rows( 'detail_group' ) ) : ?>
                                                            <div class="row">
                                                            <?php while ( have_rows( 'detail_group' ) ) :
                                                                the_row(); ?>
                                                                <?php if ( $detail_text = get_sub_field( 'detail_text' ) ) : ?>
                                                                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                                                        <div class="work_box">
                                                                            <p><?php echo $detail_text; ?></p>
                                                                        </div>
                                                                    </div>
                                                                <?php endif; ?>
                                                            <?php endwhile; ?>
                                                            </div>
                                                        <?php endif; ?>
                                                    </div>
                                                </div>
                                                <?php if ( have_rows( 'image_columns' ) ) : ?>
                                                    <div class="col-sm-12">
                                                        <div class="work_imgboxes row">
                                                            <?php while ( have_rows( 'image_columns' ) ) : the_row(); ?>
                                                                <div class="col-sm-6">
                                                                    <div class="work_imgbox work_imgbx_left">
                                                                    <?php
                                                                    $leftside_image = get_sub_field( 'leftside_image' );
                                                                    if ( $leftside_image ) : ?>
                                                                        <img src="<?php echo esc_url( $leftside_image['url'] ); ?>" alt="<?php echo esc_attr( $leftside_image['alt'] ); ?>" />
                                                                        <?php if(!empty($leftside_image['caption'])) echo '<p>'.$leftside_image['caption'].'</p>'; ?>
                                                                    <?php endif; ?>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="work_imgbox work_imgbx_right">
                                                                    <?php
                                                                    $rightside_image = get_sub_field( 'rightside_image' );
                                                                    if ( $rightside_image ) : ?>
                                                                        <img src="<?php echo esc_url( $rightside_image['url'] ); ?>" alt="<?php echo esc_attr( $rightside_image['alt'] ); ?>" />
                                                                        <?php if(!empty($rightside_image['caption'])) echo '<p>'.$rightside_image['caption'].'</p>'; ?>
                                                                    <?php endif; ?>
                                                                    </div>
                                                                </div>
                                                            <?php endwhile; ?>
                                                        </div>
                                                    </div>
                                                <?php endif; ?>                      
                                            <?php endwhile; ?>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                        <?php 
                        $count++;
                    endwhile;
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>
<!-- Accordion Section -->