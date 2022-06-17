<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package Up2Date
 * @since Up2Date 1.0
 */

$logo = esc_url( options('footer_logo'));
if(!$logo){
	$logo = IMG_PATH.'logo.png';
}
?>		<!-- Footer -->
		<footer class="footer">
			<div class="container">
				<div class="row top-footer">
					<div class="col-sm-12 col-lg-3 col-xl-3">  
						<div class="footer-logo-mobile">
							<div class="footer-logo">
								<a href="<?php echo site_url();?>"><img src="<?php echo $logo;?>" alt="logo"></a>
							</div>
							
							<div class="d-sm-block d-md-block d-lg-none d-xl-none"> 
								<div class="footer-links">
									<?php if ( $contact_no = get_field( 'contact_no', 'options' ) ) : ?>
										<a class="nav-link" href="<?php echo telURL(esc_html( $contact_no )); ?>"><span>Call:</span> <?php echo esc_html( $contact_no ); ?> <i class="fal fa-arrow-up"></i></a>
									<?php endif; ?>
								</div>
							</div>
						</div>
					</div>
				
					<?php if ( have_rows( 'scroll_menu_links', 'options' ) ) : $count = 1; ?>
						<div class="col-sm-12 col-lg-9 col-xl-9">  
							<div class="footer-links">
								<ul class="scroll-menu">
								<?php while ( have_rows( 'scroll_menu_links', 'options' ) ) :
									the_row();
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
										<li>
										<a class="<?php echo $extra_class;?>" href="<?php echo esc_url( $menu_item_link ); ?>" <?php echo $attr;?> data-menu-item="<?php echo $count++; ?>" ><?php echo esc_html( $menu_item_title ); ?></a>
										</li>
									<?php
									endif;
								endwhile;
								
								if ( $contact_no = get_field( 'contact_no', 'options' ) ) : ?>
									<li>
									<a class="nav-link" href="<?php echo telURL(esc_html( $contact_no )); ?>" data-menu-item="<?php echo $count++; ?>"><span>Call:</span> <?php echo esc_html( $contact_no ); ?> <i class="fal fa-arrow-up"></i></a>
									</li>
								<?php
								endif;
								?>
								</ul>
							</div>
						</div>
					<?php endif; ?>
				</div>
				<div class="row copyrightrow">
					<div class="col-sm-12"> 
						<div class="footer-copyright">
							<?php echo do_shortcode(options('copyright_text')); ?>
						</div>
					</div>
				</div>
			</div>
		</footer>
	<?php wp_footer(); ?>
	</body>
</html>