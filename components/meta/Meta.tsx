import { whois } from "@lib/whois";
import { NextSeo } from "next-seo";

export interface IMetaProps {
  description?: string;
  images?: IImageProps[];
  title?: string;
}

export interface IImageProps {
  alt: string;
  height: number;
  url: string;
  width: number;
}

export const Meta = ({ description, images, title }: IMetaProps) => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={`https://${whois.domain}/`}
      additionalLinkTags={[
        {
          rel: "icon",
          href: `https://${whois.domain}/favicon.ico`,
        },
        {
          rel: "apple-touch-icon",
          href: `https://${whois.domain}/icon.png`,
          sizes: "76x76",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
      ]}
      openGraph={{
        url: `https://${whois.domain}/`,
        title: title,
        description: description,
        images: [
          ...(images ?? [
            {
              alt: whois.domain,
              height: 800,
              url: `https://${whois.domain}/image.png`,
              width: 900,
            },
          ]),
          ,
        ],
        site_name: whois.domain,
      }}
      twitter={{
        handle: `@${whois.twitter}`,
        site: `@${whois.domain}`,
        cardType: "summary_large_image",
      }}
    />
  </>
);
