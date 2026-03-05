import { ImageResponse } from "next/og";
import { getPostTitle } from "@/lib/posts";

const interBold = fetch(
	"https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf",
).then((res) => res.arrayBuffer());

const interRegular = fetch(
	"https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf",
).then((res) => res.arrayBuffer());

export async function GET(request) {
	try {
		const [boldFont, regularFont] = await Promise.all([
			interBold,
			interRegular,
		]);

		const { searchParams } = new URL(request.url);
		// ?id=<id>
		const hasId = searchParams.has("id");

		let title = "Ravi Suhag - Personal Blog";

		if (hasId) {
			const id = searchParams.get("id");
			title = await getPostTitle(id);
		}

		return new ImageResponse(
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					height: "100%",
					width: "100%",
					background: "rgb(223, 223, 193)",
					fontFamily: "Inter",
					padding: "56px 72px",
					position: "relative",
				}}
			>
				{/* Noise overlay */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						width: "1200px",
						height: "630px",
						opacity: 0.25,
						display: "flex",
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='1200' height='630' filter='url(%23n)'/%3E%3C/svg%3E")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "1200px 630px",
					}}
				/>

				{/* Accent bar at top */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						width: "1200px",
						height: "6px",
						background: "#ff4500",
						display: "flex",
					}}
				/>

				{/* Top: Logo */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<div
						style={{
							width: "22px",
							height: "22px",
							background: "#1a1a1a",
							borderRadius: "4px",
							display: "flex",
						}}
					/>
					<span
						style={{
							marginLeft: 10,
							fontSize: 18,
							fontWeight: 400,
							color: "#555555",
							letterSpacing: "0.02em",
						}}
					>
						ravisuhag.com
					</span>
				</div>

				{/* Middle: Title */}
				<div
					style={{
						display: "flex",
						fontSize: 54,
						fontWeight: 700,
						color: "#1a1a1a",
						lineHeight: 1.3,
						letterSpacing: "-0.02em",
						maxWidth: "860px",
					}}
				>
					{title}
				</div>

				{/* Bottom: Tagline */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						fontSize: 17,
						color: "#555555",
						letterSpacing: "0.01em",
						fontWeight: 400,
					}}
				>
					<div
						style={{
							width: "32px",
							height: "2px",
							background: "#ff4500",
							marginRight: "14px",
							display: "flex",
						}}
					/>
					Ravi Suhag
				</div>
			</div>,
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "Inter",
						data: boldFont,
						weight: 700,
						style: "normal",
					},
					{
						name: "Inter",
						data: regularFont,
						weight: 400,
						style: "normal",
					},
				],
			},
		);
	} catch (e) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
