<?php
/**
 * The Template for displaying all single posts
 *
 * @package Up2Date
 * @since Up2Date 1.0
 */

get_header(); ?>

<div id="main" class="wrapper">
	
	<?php 
		/*======================================================
		 *       PAGE HEADER OR BANNER SECTION 
		 *====================================================== */
			
			get_template_part( 'page-templates/page/single', 'header' ); 
			
	?>
	<!---  .page-content-section Start -->
	<div class="page-content-section pt-5 pb-5">
		<div class="container">
			<?php	
				 /*======================================================
				 *       PAGE LAYOUT OR PAGE MAIN BODY SECTION 
				 *====================================================== */		
				
				  if(get_field('sidebar', 'options') == 'left'): ?>
				
					<div class="left-sidebar-layout">
						<div class="row">
							<div class="col-sm-3">
								<?php get_sidebar(); ?>
							</div><!-- .col-sm-3 -->	
							
							<div class="col-sm-9">
								<div class="site-content">	
									<?php while ( have_posts() ) : the_post(); ?>
										<?php get_template_part( 'page-templates/page/content/content', 'page' ); ?>
										<nav class="nav-single">
											<h3 class="assistive-text"><?php _e( 'Post navigation', 'up2date' ); ?></h3>
											<span class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'up2date') . '</span> %title' ); ?></span>
											<span class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'up2date' ) . '</span>' ); ?></span>
										</nav><!-- .nav-single -->
										<?php comments_template( '', true ); ?>	
									<?php endwhile; // end of the loop. ?>
					
								</div><!-- .site-content -->
							</div><!-- .col-sm-9 -->
												
						</div><!-- .row -->
					</div>	
					

			<?php elseif(get_field('sidebar', 'options') == 'right'): ?>
				
					<div class="right-sidebar-layout">		
						<div class="row">
							<div class="col-sm-9">
								<div class="site-content">								
									<?php while ( have_posts() ) : the_post(); ?>
										<?php get_template_part( 'page-templates/page/content/content', 'page' ); ?>
										<nav class="nav-single">
											<h3 class="assistive-text"><?php _e( 'Post navigation', 'up2date' ); ?></h3>
											<span class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'up2date') . '</span> %title' ); ?></span>
											<span class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'up2date' ) . '</span>' ); ?></span>
										</nav><!-- .nav-single -->
										<?php comments_template( '', true ); ?>			
									<?php endwhile; // end of the loop. ?>
								
								</div><!-- .site-content -->
							</div><!-- .col-sm-9 -->
							<div class="col-sm-3">
								<?php get_sidebar(); ?>
							</div><!-- .col-sm-3 -->						
						</div>	<!-- .row -->
					</div>	
			<?php else:?>
			
					<div class="right-sidebar-layout">		
						<div class="row">
							<div class="col-sm-12">
								<div class="site-content">								
									<?php while ( have_posts() ) : the_post(); ?>
										<?php get_template_part( 'page-templates/page/content/content', 'page' ); ?>
										<nav class="nav-single">
											<h3 class="assistive-text"><?php _e( 'Post navigation', 'up2date' ); ?></h3>
											<span class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'up2date') . '</span> %title' ); ?></span>
											<span class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'up2date' ) . '</span>' ); ?></span>
										</nav><!-- .nav-single -->
										<?php comments_template( '', true ); ?>			
									<?php endwhile; // end of the loop. ?>
								
								</div><!-- .site-content -->
							</div><!-- .col-sm-12 -->
						</div>	<!-- .row -->
					</div>	
					
			<?php endif;?>
		</div>
	</div>
	<!---  .page-content-section END -->

</div><!-- #main .wrapper -->
<?php get_footer(); ?>
