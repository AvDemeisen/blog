import React from "react"
import { 
	Card, 
	CardContent,
	CardTitle,
	CardSubtitle,
	CardLink,
	CardDate,
	CardImg,
	CardImgSrc,
	TagList, 
	TagItem
} from "./styles";

export default ({ data }) => (
	<Card>
		<CardContent>
			<TagList>
				{data.tags.map(tag =>
					<TagItem key={tag}>
						<CardLink to={`/results/?q=${tag}`}>{tag}</CardLink>
					</TagItem>
				)}
			</TagList>
			<CardTitle to={`/${data.slug}`}>
				{data.title}
			</CardTitle>
			<CardSubtitle>{data.subtitle}</CardSubtitle>
			<CardDate>{data.createdAt}</CardDate>
		</CardContent>
		<CardLink to={`/${data.slug}`} title={data.title}>
			{data.image.fluid ?
				<CardImg alt={data.image.title} objectFit="contain" fluid={data.image.fluid} /> :
				<CardImgSrc alt={data.image.fields.title} src={`${data.image.fields.file.url}?w=290&fit=scale`}></CardImgSrc>
			}
		</CardLink>
	</Card>
)