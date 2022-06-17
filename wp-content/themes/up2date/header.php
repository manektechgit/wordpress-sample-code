<?php
/**
 * Header file for the Twenty Twenty WordPress default theme.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Up2Date
 * @since Up2Date 1.0
 */

?><!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="theme-color" content="#ebf9ff">

		<!-- Font -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
		
		<link rel="profile" href="http://gmpg.org/xfn/11" />
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />		
		<?php wp_head(); ?>		
		<?php head_section_script(); ?>
	</head>

	<body <?php body_class(); ?> data-spy="scroll" data-target=".navbar" data-offset="50">
		<?php site_loader(); ?>
		<?php scipt_print_in_body(); ?>
		<?php wp_body_open(); ?>
		<?php
		$logo = esc_url( options('main_logo'));
		if(!$logo){
			$logo = IMG_PATH.'logo.png';
		}
		?>
		<header class="header">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<nav class="navbar navbar-expand-lg navbar-dark">
							<a class="navbar-brand" href="<?php echo site_url();?>">
								<img src="<?php echo $logo;?>" alt="img">
							</a>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
							</button>
							<div class="d-sm-block d-md-block d-lg-none d-xl-none">
								<div class="nav-item last-contact-no">
									<?php
									if ( $contact_no = get_field( 'contact_no', 'options' ) ) : ?>
										<a class="nav-link" href="<?php echo telURL(esc_html( $contact_no )); ?>"><span>Call:</span> <?php echo esc_html( $contact_no ); ?> <i class="fal fa-arrow-up"></i></a>
									<?php
									endif;
									?>
								</div>
							</div>
							<?php if ( have_rows( 'scroll_menu_links', 'options' ) ) : $count = 1; ?>
								<div class="collapse navbar-collapse" id="navbarSupportedContent">
                  					<ul class="navbar-nav ml-auto scroll-menu">
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
												<li class="nav-item">
												<a class="nav-link <?php echo $extra_class;?>" data-menu-item="<?php echo $count++; ?>" href="<?php echo esc_url( $menu_item_link ); ?>" <?php echo $attr;?> ><?php echo esc_html( $menu_item_title ); ?></a>
												</li>
											<?php
											endif;
										endwhile;
										
										$show_contact = get_field( 'show_contact', 'options' );
										if( $show_contact && in_array('yes', $show_contact) ) :
											if ( $contact_no = get_field( 'contact_no', 'options' ) ) : ?>
												<li class="nav-item last-contact-no">
												<a class="nav-link" href="<?php echo telURL(esc_html( $contact_no )); ?>"><span>Call:</span> <?php echo esc_html( $contact_no ); ?> <i class="fal fa-arrow-up"></i></a>
												</li>
											<?php
											endif;
										endif; ?>
                					</ul>
								</div>
							<?php endif; ?>
              			</nav>
					</div>
				</div>
			</div>
		</header><!-- #masthead -->