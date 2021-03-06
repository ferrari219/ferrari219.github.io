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
			skills: 'React, ES6, SASS, styled-components, gulp, jQuery, html, MySql, Node Express, Figma, Adobe XD, Photoshop, github, gitlab, ',
			contact: {
				email: 'grahamsnum@gmail.com',
				github: 'https://github.com/ferrari219',
				homepage: 'ferrari219.github.io',
			},
			exp: [
				{
					company: '현대리바트',
					date: '2013.10~현재',
					job: 'UIUX 프론트엔드 파트장',
					project: [
						{
							title: '리바트 씽킹 모바일웹앱. 원데이클래스 신규사업 프로토타입 제안',
							detail: '사내 공모전 최우수상, 사업부장 표창',
							lnk: 'https://xd.adobe.com/view/396a5d24-354e-468e-45e6-cb3d07819689-4f5b/',
						},
						{
							title: '리바트 하이브리드앱 최초 런칭',
							detail: '현대백화점 그룹사 표창, 대표이사 표창',
						},
						{
							title: '버스커 모바일웹 (사이드프로젝트)',
							lnk: 'https://projects.invisionapp.com/share/JZRMNHUH2BC',
						},
						{
							title: '사내 업무 자동화툴 제작, 배포',
							detail: '대표이사 표창. 엑셀파일 이용한 상품기술서/기획전 디자인, 코딩 제작 프로그램 제작',
						},
					],
				},
				{
					company: '잡코리아',
					date: '2010.4~2013.10',
					job: '디자인팀 웹디자인&퍼블리셔',
					project: [
						{
							title: 'test',
							detail: 'test',
						},
						{
							title: '사내 업무 자동화툴 제작, 배포',
							detail: '엑셀파일 이용한 상품기술서/기획전 디자인, 코딩 제작 프로그램 제작대표이사 표창',
						},
					],
				},
				{
					company: '플립 커뮤니케이션즈',
					date: '2009.1~2010.3',
					job: '웹에이전시 웹디자인&퍼블리셔',
					project: [
						{
							title: '리바트 씽킹 모바일웹앱. 원데이클래스 신규사업 프로토타입 제안',
							detail: '사내 공모전 최우수상, 사업부장 표창 https://xd.adobe.com/view/396a5d24-354e-468e-45e6-cb3d07819689-4f5b/',
						},
					],
				},
				{
					company: '힘 커뮤니케이션',
					date: '2007.10~2008.10',
					job: '웹에이전시 웹디자인&퍼블리셔',
					project: [
						{
							title: '리바트 씽킹 모바일웹앱. 원데이클래스 신규사업 프로토타입 제안',
							detail: '사내 공모전 최우수상, 사업부장 표창<br/> https://xd.adobe.com/view/396a5d24-354e-468e-45e6-cb3d07819689-4f5b/',
						},
						{
							title: '리바트 하이브리드앱 최초 런칭',
							detail: '현대백화점 그룹사 표창, 대표이사 표창',
						},
						{
							title: '버스커 모바일웹 (사이드프로젝트)',
							detail: 'https://projects.invisionapp.com/share/JZRMNHUH2BC',
						},
					],
				},
				{
					company: '피포라인',
					date: '2006.1~2007.9',
					job: '인터넷사업부 웹디자인&퍼블리셔',
					project: [
						{
							title: '하프코인, 코인100, 현대하이넷 총 3개 사이트 홈페이지 제작',
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
