import React, { Component } from 'react';
import 'scss/index'; //global scss
import style from './App.module.scss';
import MainInfo from '@/common/mainInfo';
import SubInfo from '@/common/subInfo';
// import refer from 'img/refer.jpg'; //삭제 예정

class App extends Component {
	state = {
		mainInfo: {
			myname: 'Sung-ho Jeon',
			job: 'Frontend Developer',
		},
		subInfo: {
			iam: '디자인, 개발 모두 다하는 욕심 많은 프론트엔드 개발자 전성호 입니다.',
			iamEn: 'Design, Frontend, Backend. I am Jason, a greedy developer.',
			skills: 'React, ES6, SASS, styled-components, gulp, jQuery, html, MySql, Node Express, Figma, Adobe XD, Photoshop, github, gitlab, ',
			contact: {
				email: 'grahamsnum@gmail.com',
				github: 'https://github.com/ferrari219',
				homepage: 'ferrari219.github.io',
				birth: '1983. 2. 2',
			},
			exp: [
				{
					company: '현대리바트',
					companyEn: 'Hyundai Livart',
					date: '2013.10~Now',
					job: 'UIUX 프론트엔드 파트장',
					jobEn: 'UIUX Frontend Leader of the part',
					project: [
						{
							title: '리바트 씽킹 모바일웹앱. 신규사업 원데이클래스 프로토타입 제안',
							titleEn: 'Livart Thinking mobile web(Proposed new business One-Day class prototype)',
							detail: '사내 공모전 최우수상, 사업부장 표창',
							detailEn: 'Award for Best In-house Contest, Commendation by Business Manager',
							lnk: 'https://xd.adobe.com/view/396a5d24-354e-468e-45e6-cb3d07819689-4f5b/',
						},
						{
							title: '리바트 하이브리드앱 최초 런칭',
							titleEn: 'First launch of the Livart Hybrid App',
							detail: '현대백화점 그룹사 표창, 대표이사 표창',
							detailEn: 'Hyundai Department Store Group Company Commendation, Representative Director Commendation',
						},
						{
							title: '버스커 모바일웹 (사이드프로젝트)',
							titleEn: 'Busker Mobile Web (Side Project)',
							detail: '지인들과 제작한 사이드 프로젝트, 기획+디자인+프론트엔드',
							detailEn: 'Side projects, planning + design + front-end created with acquaintances',
							lnk: 'https://projects.invisionapp.com/share/JZRMNHUH2BC',
						},
						{
							title: '사내 업무 자동화툴 제작, 배포',
							titleEn: 'Create and deploy in-house automation tools',
							detail: '대표이사 표창. 엑셀파일 이용한 상품기술서/기획전 디자인, 코딩 제작 프로그램 제작',
							detailEn: 'a commendation to the representative Design of product description/planning exhibition using Excel file and production of coding production program',
						},
					],
				},
				{
					company: '잡코리아',
					companyEn: 'Job Korea',
					date: '2010.4~2013.10',
					job: '디자인팀 웹디자인&퍼블리셔',
					jobEn: 'Design team Web Designer & Coder',
					project: [
						{
							title: '알바비책 하이브리드 앱 제작',
							titleEn: 'Create a part-time book hybrid app',
							detail: 'photoshop, html, css, javascript, jquery 사용',
							detailEn: 'photoshop, html, css, javascript, jquery',
						},
						{
							title: '포털 내 전체 팝업 개편',
							titleEn: 'Renewal the entire pop-up in the portal',
							detail: 'photoshop, html, css, javascript, jquery 사용',
							detailEn: 'photoshop, html, css, javascript, jquery',
						},
						{
							title: '통합검색 페이지 개편',
							titleEn: 'Renewal the Integrated Search page',
							detail: 'photoshop, html, css, javascript, jquery 사용',
							detailEn: 'photoshop, html, css, javascript, jquery',
						},
					],
				},
				{
					company: '플립 커뮤니케이션즈',
					companyEn: 'Pulip Communications',
					date: '2009.1~2010.3',
					job: '웹에이전시 웹디자인&퍼블리셔',
					jobEn: 'WebAgency Web Designer&Coder',
					project: [
						{
							title: '코스모폴리탄 리뉴얼',
							titleEn: 'Cosmopolitan Renewal',
							detail: '전 페이지 디자인 및 코딩',
							detailEn: 'Full-page design and coding',
						},
						{
							title: '박카스D 리뉴얼',
							titleEn: 'Bacchus Renewal',
							detail: 'GDWEB winner prize, 사내 우수사원 포상, 전 페이지 디자인 및 코딩',
							detailEn: 'Reward for outstanding employees in the company, design and coding of all pages',
							lnk: 'http://www.gdweb.co.kr/sub/view.asp?displayrow=60&Txt_key=all&Txt_word=&Txt_agnumber=&Txt_fgbn=5&Txt_bcode1=&Txt_gbflag=&Txt_bcode2=030710001&Txt_bcode3=&Txt_bcode4=&Txt_bcode5=&Page=28&str_no=1000',
						},
						{
							title: '교통안전공단 리뉴얼',
							titleEn: 'Renewal of Korea Transportation Safety Authority',
							detail: '서브 페이지 디자인 및 전 페이지 코딩',
							detailEn: 'Sub-page design and full-page coding',
						},
					],
				},
				{
					company: '힘 커뮤니케이션',
					companyEn: 'Him Communication',
					date: '2007.10~2008.10',
					job: '웹에이전시 웹디자인&퍼블리셔',
					jobEn: 'WebAgency Web Designer&Coder',
					project: [
						{
							title: 'EXR 마이크로사이트 ProgressiveSchool 리뉴얼 ',
							titleEn: 'Renewal of EXR microsite Progressive School',
							detail: '전페이지 디자인 및 코딩',
							detailEn: 'Designing and coding full-pages',
						},
						{
							title: '놀부 브랜드 리뉴얼',
							titleEn: 'Renewal Nolbu Brand',
							detail: '서브페이지 디자인 및 전페이지 코딩',
							detailEn: 'Sub-page design and full-page coding',
						},
						{
							title: 'HAZZYS 리뉴얼',
							titleEn: 'HAZZYS Renewals',
							detail: '서브페이지 코딩',
							detailEn: 'Subpage coding',
						},
					],
				},
				{
					company: '피포라인',
					companyEn: 'P4line',
					date: '2006.1~2007.9',
					job: '인터넷사업부 웹디자인&퍼블리셔',
					jobEn: 'Internet Business Department Web Designer & Coder',
					project: [
						{
							title: '하프코인, 코인100, 현대하이넷 총 3개 사이트 홈페이지 제작',
							titleEn: 'Homepage production for a total of three sites: Half Coin, Coin100, and Hyundai Hi-Net.',
						},
					],
				},
			],
		},
	};
	render() {
		const { mainInfo, subInfo } = this.state;
		return (
			<main className={style.container}>
				{/* <div className={style.refer}>
					<img src={refer} alt="refer-image" />
				</div> */}
				<MainInfo mainInfo={mainInfo} />
				<SubInfo subInfo={subInfo} />
			</main>
		);
	}
}

export default App;
