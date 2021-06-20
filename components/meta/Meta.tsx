//TODO: Meta requires new default props on line 20 and 22, and a default image src on line 53

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

export const Meta = ({
  description = "A Web Design & Development business in Estevan Saskatchewan, specializing in custom websites, mobile-friendly designs and online marketing.",
  images,
  title = "ljtech",
}: IMetaProps) => (
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
          href: `https://${whois.domain}/76h/logo.png`,
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
              height: 512,
              url: `https://${whois.domain}/512h/logo.png`,
              width: 512,
            },
          ]),
          ,
        ],
        site_name: whois.domain,
      }}
      twitter={{
        handle: `@${whois.handle}`,
        site: `@${whois.domain}`,
        cardType: "summary_large_image",
      }}
    />
  </>
);
