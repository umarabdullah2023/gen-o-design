import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import SvgCommonProgress from '../svgs/converted/common-progress';

export default function Sidebar({ children, childrenClassName = '' }) {
	const handleClick = (path) => () => {};
	const navigate = useNavigate();

	const sidebarData = [
		{
			name: 'Dashboard',
			path: '/dashboard',
			Icon: SvgCommonProgress,
		},
	];

	const location = useLocation();

	const SidebarItem = ({ item }) => {
		const { Icon, path, name } = item;
		return (
			<li
				key={path}
				className={
					location.pathname?.includes(path) || location.pathname?.includes(item?.sidebarActivePath)
						? `${name?.toLowerCase()} active`
						: name?.toLowerCase()
				}
				onClick={handleClick(path)}>
				<Icon />
			</li>
		);
	};

	return (
		<div className='sidebar-container'>
			<div className='sidebar'>
				<ul
					className='list-style-none sidebar-items d-flex flex-column justify-content-between'
					style={{ rowGap: '20px' }}>
					<div className='sidebar-upper-items d-flex flex-column'>
						<li className='sidebar-logo'>{/* <ParamsSyncLogo isForSidebar /> */}</li>
						<div className='sidebar-items-main d-flex flex-column'>
							{sidebarData?.map((item) => {
								return <SidebarItem key={item?.name} item={item} />;
							})}
						</div>
					</div>
					{/* <SidebarItem item={logoutData} /> */}
				</ul>
			</div>
			<div className={'sidebar-children ' + childrenClassName}>{children}</div>
		</div>
	);
}
