<?php
/**
 * Template Name: Privacy Policy
 *
 * @package Up2Date
 * @since Up2Date 1.0
 */
get_header(); ?>
<main class="main_content">
	<section class="privacypage" id="privacy-sec">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="privacypage_warp w-75">
						<?php while ( have_posts() ) : the_post(); ?>
							<?php echo '<h1 class="entry-title">'.get_the_title().'</h1>';?>
							<?php the_content(); ?>				
						<?php endwhile; // end of the loop. ?>
					</div>
				</div>
			</div>
		</div>
	</div><!-- .page-content-section -->
</div>
<?php get_footer(); ?>