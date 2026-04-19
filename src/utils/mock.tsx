import { title } from "process"

export const DATA = {
	hero: {
		title: (
			<>
				<span className="text-highlight">Estude</span> e{" "}
				<span className="text-highlight">trabalhe</span>, ao mesmo tempo, no
				Canadá
			</>
		),
		image_src: "/estudetrabalhe.webp",
	},
	quem_somos: {
		title: (
			<>
				O <span className="text-highlight block">Sault</span>
				<span className="text-highlight block">College</span>
			</>
		),
		description: `<p>
					O melhor lugar para sua especialização no Canadá, em Engenharia,
					Saúde, Meio Ambiente e Negócios! Um dos melhores colleges da Província
					de Ontário em Satisfação do Estudante, o Sault College possui seu
					campus na incrível cidade de Sault Ste. Marie. Com cerca de 80.000
					habitantes, a cidade de Sault Ste. Marie chama atenção pelo seu charme
					e receptividade, além é claro, de um atrativo custo de vida e mercado
					de trabalho aquecido. A cidade foi contemplada com o programa de
					imigração RCIP (Rural Community Immigration Pilot Program), que acaba
					sendo mais uma oportunidade para aqueles que buscam estender sua
					estadia no Canadá. O Sault College conta com mais de 70 programas
					entre Graduações e Pós-Graduações, de um ano a dois anos de duração.
					Os principais destaques dos programas, que estão completamente
					alinhados às oportunidades de trabalho em Sault Ste. Marie, estão nas
					áreas de Trades, Engenharia, Saúde, Meio Ambiente, Negócios/Logística
					e também, Serviços Comunitários.
				</p>`,
	},
	programas: {
		title: (
			<>
				Conheça nossos <span className="text-highlight block">programas</span>
			</>
		),
		cards: [
			{
				title: "Health Programs",
				img_src: "/programas-4-sc.webp",
			},
			{
				title: "Skilled Trades and Transportation",
				img_src: "/programas-3-sc.png",
			},
			{
				title: "Engineering & Trades",
				img_src: "/programas-2-sc.png",
			},
			{
				title: "Community Services",
				img_src: "/programas-1-sc.png",
			},
		],
		oportunidade:
			"Essa é sua oportunidade de garantir uma Graduação ou Pós-Graduação Internacional",
		logo: "/sc-icon.svg",
	},
	diferenciais: {
		bloco_1: {
			title: (
				<>
					Diferenciais
					<br />
					<span className="text-highlight block">Sault Ste. Marie</span>
				</>
			),
			description: (
				<ul>
					<li>Localização;</li>
					<li>Custo de Vida acessível;</li>
					<li>Boa Empregabilidade;</li>
					<li>Natureza Exuberante;</li>
					<li>Qualidade de Vida incrível;</li>
					<li>Senso de Pertencimento;</li>
				</ul>
			),
		},
		bloco_2: {
			title: (
				<>
					Diferenciais
					<br />
					<span className="text-highlight block">Sault College</span>
				</>
			),
			description: (
				<ul>
					<li>
						Uma das Principais Instituições de Ensino de Ontário em Satisfação
						do Estudante;
					</li>
					<li>Especialista em Programas de Engenharia, Trades e Saúde;</li>
					<li>Mais de 70 opções de Graduações e Pós-Graduações;</li>
					<li>Excelente estrutura;</li>
					<li>Residência Estudantil com baixo investimento;</li>
					<li>Ótimo relacionamento com empresas da região;</li>
					<li>Apoio total ao estudante;</li>
					<li>Centro de Carreiras;</li>
					<li>Professores qualificados e dentro do mercado;</li>
				</ul>
			),
		},
	},
	conheca: {
		title: (
			<>
				<span className="text-highlight block">Conheça mais</span>
				sobre o Sault College
			</>
		),
		videos: {
			urls: [
				"https://www.youtube.com/watch?v=QNCKY3g-rnA",
				"https://www.youtube.com/watch?v=viYqPg6_zII",
				"https://www.youtube.com/watch?v=m0uPuiu1yCs",
			],
		},
	},
}
