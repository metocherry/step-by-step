export interface TemplateProps {
  html: HTMLElement,
  data?: object
}

export const html = (props: TemplateProps) => `
  <div class="swiper-silde">
    ${html}
  </div>
`;
