<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package Up2Date
 * @since Up2Date 1.0
 */

get_header(); ?>

<div class="page-content-section d-flex flex-wrap justify-content-center align-center align-items-center">
	<div class="bg-image" style="background-image: url(<?php echo get_template_directory_uri(); ?>/assets/images/404-bg.jpg)"></div>
	<div class="container">
		<div id="content">
			<div class="main-con-sec error-main">
				<div class="error_wrapper">					
					<div class="error_left">
						<h1 class="title-404 fadeInUp"><?php _e( '404', 'up2date' ); ?></h1>
					</div>
					<div class="error_right">
						<div class="logo-wrap">
							<?php logo_header(TRUE); ?>
						</div>
						<div class="content-404">
							<h3><?php _e( 'Page Not Found!', 'up2date' ); ?></h3>
							<div class="orange-link">
								<a href="<?php echo site_url(); ?>" class="cta-button"><span>Back to Home</span> <i class="fal fa-arrow-right"></i></a>
							</div>
						</div><!-- .entry-content -->
					</div>					
				</div>
			</div>
		</div><!-- #content -->
	</div><!-- .container -->
</div>
<?php get_footer(); ?>
