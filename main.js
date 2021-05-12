<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Twig Games</title>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">

	<!--FONT AWESOME-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<!--GOOGLE FONTS-->
	<style>img[alt="www.000webhost.com"]{display: none;}</style>
</head>

<body>
	<header class="head">
		<span class="dot"></span>
		<div class="menu-toggler" >
			<div class="bar half start"></div>
			<div class="bar "></div>
			<div class="bar half end"></div>
		</div>
		<nav class="top-nav">
			<ul class="nav-list">
				<li>
					<a href="index.html" class="nav-link">Home</a>
				</li>
				<li>
					<a href="#about" class="nav-link">About</a>
				</li>
				<li>
					<a href="#services" class="nav-link">Services</a>
				</li>
				<li>
					<a href="#portfolio" class="nav-link">Portfolio</a>
				</li>
			</ul>
		</nav>
		<div class="landing-text">
			<img src="images/twig1.png" alt="">
		</div>
	</header>

	<section class="services" id="services">
		<div class="container">
			<div class="section-heading">
				<h1>Services</h1>
				<h6>What I can do for you</h6>
			</div>
			<div class="my-skills">
				<div class="skills" data-aos="fade-right" data-aos-delay="300">
					<div class="icon-container">
						<img src="images/game.png"></img>
					</div>
					<h1>Game Development</h1>
					<p>Have an idea for a game? We'll help you build it. Get end to end game design and Game development services.</p>
				</div>
				<div class="skills"  data-aos="fade-left" data-aos-delay="600">
					<div class="icon-container">
						<img src="images/app.png"></img>
					</div>
					<h1>App development</h1>
					<p>Best mobile app development services for enterprise, startups & SME's. Our experienced developers build your application using the latest technologies.</p>
				</div>
				<div class="skills"  data-aos="fade-left" data-aos-delay="600">
					<div class="icon-container">
						<img src="images/web.png"></img>
					</div>
					<h1>Web Development</h1>
					<p>Customer-focused web development services built on latest technologies. We specialize in HTML,CSS,PHP,JS</p>
				</div>
				<div class="skills"  data-aos="fade-left" data-aos-delay="600">
					<div class="icon-container">
						<img src="images/graphic.png"></img>
					</div>
					<h1>Graphic Design</h1>
					<p>Get creative Graphic designing service for logo, website, brochure, flyer, mobile app etc.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="portfolio" id="portfolio">
		<div class="container">
			<div class="section-heading">
				<h1>Portfolio</h1>
				<h6>View some of my work</h6>
			</div>
			<video class="promo-video"  autoplay controls muted loop>
  			<source src="video/draghit.mp4" type="video/MP4">
			</video>
			<div class="portfolio-apps">

			<div class="portfolio-item ">
				<div class="portfolio-img" data-aos="fade-right" data-aos-delay="300">
					<img src="images/draghit.jpg" alt="">
				</div>
				<div class="portfolio-description" data-aos="fade-left" data-aos-delay="600">
					<h6>Drag Hit</h6>
					<p>Drag and release to launch the ball.Hit the purple ball to complete the level. </p>
					   <a href="https://play.google.com/store/apps/details?id=com.twig.DragHit" class="cta"><center><img src="images/playstore.png" alt=""></a>
				</div>
			</div>
			<div class="portfolio-item">
				<div class="portfolio-img" data-aos="fade-right" data-aos-delay="1500">
					<img src="images/block.jpg" alt="">
				</div>
				<div class="portfolio-description" data-aos="fade-left" data-aos-delay="1800">
					<h6>Place-it</h6>
					<p>Place-it is a brain teaser addictive game designed to decision making and helps to train your brain.</p>
					   <a href="https://play.google.com/store/apps/details?id=com.TwigGames.Placeit" class="cta"> <center><img src="images/playstore.png" alt=""></a>
				</div>
			</div>
			<div class="portfolio-item">
				<div class="portfolio-img" data-aos="fade-right" data-aos-delay="2300">
					<img src="images/covid.jpg" alt="">
				</div>
				<div class="portfolio-description" data-aos="fade-left" data-aos-delay="2000">
					<h6>Covid-19 Tracker</h6>
					<p>Live statistics and coronavirus news tracking the number of confirmed cases, recovered patients, tests, and death toll due to the COVID-19.</p>
					   <a href="https://drive.google.com/file/d/1v3uLKHxM6Cn6QJ92bKqmzCPiAhAAK_qU/view?usp=sharing" class="cta"><center><img src="images/playstore.png" alt=""></a>
				</div>
			</div>
			<div class="portfolio-item">
				<div class="portfolio-img" data-aos="fade-right" data-aos-delay="1200">
					<img src="images/leftright.jpg" alt="">
				</div>
				<div class="portfolio-description" data-aos="fade-left" data-aos-delay="900">
					<h6>Left Right</h6>
					<p>The goal is to make ball reach the power source by rotating the level. Are you capable of solving these puzzles?</p>
					<a href="https://play.google.com/store/apps/details?id=com.TwigGames.LeftRight" class="cta"><center><img src="images/playstore.png" alt=""></a>				</div>
			</div>

			<div class="portfolio-item">
				<div class="portfolio-img" data-aos="fade-right" data-aos-delay="1500">
					<img src="images/tapturn.jpg" alt="">
				</div>
				<div class="portfolio-description" data-aos="fade-left" data-aos-delay="1800">
					<h6>Tap Turn</h6>
					<p>"Tap to Turn" and avoid Meteors. </p>
					   <br><br><br><a href="https://play.google.com/store/apps/details?id=com.twig.tapturn" class="cta"> <center><img src="images/playstore.png" alt=""></a>
				</div>
			</div>

			<div class="portfolio-item">
				<div class="portfolio-img" data-aos="fade-right" data-aos-delay="2300">
					<img src="images/tilt.JPG" alt="">
				</div>
				<div class="portfolio-description" data-aos="fade-left" data-aos-delay="2000">
					<h6>Tilt'n Dodge</h6>
					<p>Tilt your device and dodge the obstacles . Use powerups and your surrounding wisely to pass through various levels.</p>
					   <a href="https://play.google.com/store/apps/details?id=com.twig.lets_roll" class="cta"><center><img src="images/playstore.png" alt=""></a>
				</div>
			</div>
			<div class="portfolio-item">
				<div class="portfolio-img" data-aos="fade-right" data-aos-delay="1500">
					<img src="images/shortpath.jpg" alt="">
				</div>
				<div class="portfolio-description" data-aos="fade-left" data-aos-delay="1800">
					<h6>Dynamic Maze</h6>
					<p>Click on the ground to move red box.Reach blue box to complete the level.
						Can you solve the puzzle?. </p>
					   <a href="https://play.google.com/store/apps/details?id=com.TwigGames.dynamicmaze" class="cta"> <center><img src="images/playstore.png" alt=""></a>
				</div>
			</div>
		</div>
		</div>
	</section>
	<section class="about" id="about">
		<div class="container">
			<div class="about-details"  data-aos="fade-left" data-aos-delay="600">
				<div class="about-heading">
					<h1>About</h1>
					<h6>Us</h6>
				</div>
				<p>Twig Games is a game development company which mainly focus on providing high quality , fun , relaxing games to the users.<br>Founded in 2019, Twig Games is headquartered in India.</p>
				   <div class="social-media">
					<ul class="nav-list">
						<li>
							<a href="http://play.google.com/store/apps/dev?id=6317621557514096123" class="icon-link">
								<img src="images/play.png" alt="">
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/twig_games/" class="icon-link">
								<img src="images/instagram.png" alt="">
							</a>
						</li>
						<li>
							<a href="https://github.com/Aman-Awdhani" class="icon-link">
								<img src="images/github.png" alt="">
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="profile-img" data-aos="fade-right" data-aos-delay="300">
			<img src="images/me.jpeg" alt="">
			<div class="founder">
				<h1>Aman Awdhani <br>(Founder)</h1>
			</div>
		</div>
	</section>

	<section class="experience" id="experience">
		<div class="container">
			<div class="section-heading">
				<h1>Contact Us</h1>

			</div>
			<div class="timeline" data-aos="fade-down" data-aos-delay="300">
				<ul>
					<li class="date">
						<h1>Address:
						B89 New Ashoka Garden
						Bhopal, MP, India
						</h1>
						<h1>Phone:
						+918269494623
						</h1>
						<h1>Email:
						twiggames19@gmail.com
						</h1>
					</li>
				</ul>
			</div>
		</div>
	</section>





	<footer class="copyright">
		<div class="up" id="up">
			<i class="fas fa-chevron-up"></i>
		</div>
		<p>&copy; 2020 Twig Games</p>
	</footer>


	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
	<script src="main.js"></script>

</body>
</html>
