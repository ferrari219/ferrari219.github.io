import React from 'react';
import { Link } from 'react-router-dom';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';
import TabCareer from 'components/TabCareer';

const Section = styled.section`
	margin-top: -2rem;
	/* background: red; */
`;
const Sronly = styled.h3`
	${SrOnly}
`;
const Tab = styled.div`
	position: relative;
	z-index: 1;
	margin: 0 3rem;
	padding: 1rem;
	background: ${({ theme }) => theme.colors.grayF};
	border-radius: 4rem;
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	font-size: ${({ theme }) => theme.fonts.size.base};
	ul {
		display: flex;
		flex-direction: row;
		li {
			flex: 1;
			position: relative;
			&.is-active {
				a {
					color: ${({ theme }) => theme.colors.gray3};
				}
			}
			&:not(:last-child):after {
				position: absolute;
				right: 0;
				top: 0.4rem;
				content: '';
				width: 0.1rem;
				height: 1.4rem;
				background-color: ${({ theme }) => theme.colors.grayC};
			}
			a {
				display: block;
				text-align: center;
				color: ${({ theme }) => theme.colors.gray9};
			}
		}
	}
`;
const Careers = styled.div`
	margin-top: -2rem;
	padding: 3rem 3rem;
	background-color: #eeeff3;
	color: ${({ theme }) => theme.colors.gray6};
`;
const Company = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	/* margin: 0 0 2rem 0; */
	padding: 2rem 0 2rem 0;
	/* border-bottom: 1px solid #ccc; */
	h4 {
		flex: 1;
		font-size: ${({ theme }) => theme.fonts.size.md};
		font-weight: ${({ theme }) => theme.fonts.weight.bold};
		color: ${({ theme }) => theme.colors.gray3};
	}
	span {
		flex: 0 10rem;
		font-size: ${({ theme }) => theme.fonts.size.sm};
		letter-spacing: 0;
		text-align: right;
	}
`;
const Wrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-between;
`;
const Deco = styled.div`
	flex: 0 3rem;
	display: flex;
	flex-direction: column;
	padding: 0.5rem 1rem 2rem 0;
	strong {
		display: block;
		width: 1rem;
		height: 1rem;
		margin: 0 auto;
		border: 0.2rem solid ${({ theme }) => theme.colors.grayC};
		border-radius: 50%;
	}
	span {
		flex: 1;
		display: block;
		width: 1px;
		margin: 0 auto;
		background: ${({ theme }) => theme.colors.grayC};
	}
`;
const Project = styled.div`
	flex: 1;
`;
interface ItabcareersProps {
	company?: string;
	date?: string;
	project?: Array<{
		id: number;
		name: string;
		detail: string;
		lnk: string;
	}>;
}

const TabCareers: React.FunctionComponent<ItabcareersProps> = ({
	company,
	date,
	project,
}) => {
	// console.log(company);
	// console.log(project);
	return (
		<Section>
			<Tab>
				<ul>
					<li>
						<Link to="/iam">I am ...</Link>
					</li>
					<li className="is-active">
						<Link to="/career">Career</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
				</ul>
			</Tab>
			<Sronly>Career</Sronly>
			<Careers>
				<Company>
					<h4>{company}</h4>
					<span>{date}</span>
				</Company>
				<Wrap>
					<Deco>
						<strong></strong>
						<span></span>
						<strong></strong>
					</Deco>
					<Project>
						{project &&
							[...project]
								.reverse()
								.map((item) => (
									<TabCareer
										id={item.id}
										key={item.id}
										name={item.name}
										detail={item.detail}
										lnk={item.lnk}
									/>
								))}
					</Project>
				</Wrap>
			</Careers>
		</Section>
	);
};

export default TabCareers;
