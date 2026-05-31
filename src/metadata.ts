import { EmailTemplate } from "./context/EditorContext";

export const template1: EmailTemplate = {
  templateId: "template-1",
  templateName: "Acme Newsletter",
  templateConfig: {
    backgroundColor: "#f4f4f4",
    canvasColor: "#ffffff",
    maxWidth: "600px"
  },
  blockIds: [
    "block-1",
    "block-2",
    "block-3",
    "block-4",
    "block-5"
  ],
  blocks: {
    "block-1": {
      rootId: "header-title",
      nodes: {
        "header-title": {
          parentId: "header",
          childrens: [],
          tagName: "div",
          editor: {
            label: "Content editor",
            type: "Text"
          },
          content: "Acme Newsletter",
          style: {
            color: "#ffffff",
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "Arial",
            backgroundColor: "#1f2937",
            paddingLeft: "32px",
            paddingRight: "32px",
            paddingTop: "24px",
            paddingBottom: "24px",
            textAlign: "center",
            lineHeight: "32px"
          }
        }
      }
    },
    "block-2": {
      rootId: "hero",
      nodes:
      {
        "hero": {
          parentId: null,
          childrens: ["hero-image"],
          tagName: "div",
          style: {
            backgroundColor: "#ffffff",
            width: "100%",
            textAlign: 'center'
          },
          editor: {
            label: "Container editor",
            type: "Container"
          },
        },
        "hero-image": {
          parentId: "hero",
          childrens: [],
          tagName: "img",
          editor: {
            label: "Content editor",
            type: "Image"
          },
          props: {
            src: "https://images.rawpixel.com/image_600/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
            alt: "Hero banner",
          },
          style: {
            width: "100%",
            border: "0",
            display: "block",
            objectFit: 'cover',
            margin: "auto"
          }
        }
      }
    },
    "block-3": {
      rootId: "feature",
      nodes: {
        feature: {
          parentId: null,
          childrens: ["title", "description", "cta-link"],
          tagName: "div",
          editor: {
            label: "Container",
            type: "Container"
          },
          style: {
            backgroundColor: "#ffffff",
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "40px",
            paddingRight: "40px",
          },
        },
        title: {
          parentId: "feature",
          childrens: [],
          tagName: "div",
          editor: {
            label: "Content editor",
            type: "Text"
          },
          content: "Launch faster with our new Email Builder",
          style: {
            fontSize: "32px",
            fontWeight: "normal",
            color: "#111827",
            marginBottom: "16px",
            fontFamily: "Arial",
            textAlign: "left",
            lineHeight: "36px",
            paddingTop: "0px",
            paddingBottom: "0px",
            paddingLeft: "0px",
            paddingRight: "0px"
          }
        },
        description: {
          parentId: "feature",
          childrens: [],
          tagName: "div",
          editor: {
            label: "Content editor",
            type: "Text"
          },
          content:
            "Design beautiful responsive emails using drag-and-drop components, reusable templates, and live previews.",
          style: {
            fontSize: "16px",
            color: "#4b5563",
            lineHeight: "24px",
            marginBottom: "28px",
            fontFamily: "Arial",
            paddingTop: "0px",
            paddingBottom: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            textAlign: "left"
          }
        },
        "cta-link": {
          parentId: "feature",
          childrens: [],
          tagName: "a",
          editor: {
            label: "Button editor",
            type: "ButtonLink"
          },
          content: "Start Building",
          props: {
            href: "https://example.com",
            target: "_blank",
          },
          style: {
            backgroundColor: "#2563eb",
            color: "#ffffff",
            paddingTop: "14px",
            paddingBottom: "14px",
            paddingLeft: "24px",
            paddingRight: "24px",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "4px",
            display: "inline-block",
          },
        },
      },
    },
    "block-4": {
      rootId: "two-columns",
      nodes: {
        "two-columns": {
          parentId: null,
          childrens: ["features-table"],
          tagName: "div",
          style: {
            backgroundColor: "#ffffff",
            paddingTop: "32px",
            paddingBottom: "32px",
            paddingLeft: "32px",
            paddingRight: "32px",
          },
          editor: {
            label: "Container editor",
            type: "Container"
          },
        },
        "features-table": {
          parentId: "two-columns",
          childrens: ["features-tbody"],
          tagName: "table",
          style: {
            width: "100%",
            borderCollapse: "collapse",
          },
        },
        "features-tbody": {
          parentId: "features-table",
          childrens: ["features-row"],
          tagName: "tbody",
        },
        "features-row": {
          parentId: "features-tbody",
          childrens: ["feature-left", "feature-right"],
          tagName: "tr",
        },
        "feature-left": {
          parentId: "features-row",
          childrens: ["left-card"],
          tagName: "td",
          style: {
            width: "50%",
            verticalAlign: "top",
            paddingRight: "12px",
          },
        },
        "left-card": {
          parentId: "feature-left",
          childrens: [],
          tagName: "div",
          content:
            "⚡ Live preview editing with instant updates.",
          style: {
            fontFamily: "Arial",
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: "left",
            backgroundColor: "#f9fafb",
            color: "#283C1C",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          editor: {
            label: "Text editor",
            type: "Text"
          },
        },
        "feature-right": {
          parentId: "features-row",
          childrens: ["right-card"],
          tagName: "td",
          style: {
            width: "50%",
            verticalAlign: "top",
            paddingLeft: "12px",
          },
        },
        "right-card": {
          parentId: "feature-right",
          childrens: [],
          tagName: "div",
          editor: {
            label: "Content editor",
            type: "Text"
          },
          content:
            "📦 Export production-ready email HTML.",
          style: {
            fontFamily: "Arial",
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: "left",
            backgroundColor: "#f9fafb",
            color: "#283C1C",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
        }
      }
    },
    "block-5": {
      rootId: "footer",
      nodes: {
        "footer": {
          parentId: null,
          childrens: ["footer-text", "unsubscribe-link"],
          tagName: "div",
          style: {
            backgroundColor: "#f3f4f6",
            paddingTop: "24px",
            paddingBottom: "24px",
            paddingLeft: "32px",
            paddingRight: "32px",
            textAlign: "center",
            fontSize: "12px",
            color: "#6b7280",
          },
          editor: {
            label: "Container editor",
            type: "Container"
          },
        },

        "footer-text": {
          parentId: "root",
          childrens: [],
          tagName: "div",
          editor: {
            label: "Content editor",
            type: "Text"
          },
          content:
            "You're receiving this email because you subscribed to Acme.",
          style: {
            fontFamily: "Arial",
            color: "#4b5563",
            fontSize: "12px",
            lineHeight: "20px",
            textAlign: "center"
          }
        },
        "unsubscribe-link": {
          parentId: "root",
          childrens: [],
          tagName: "a",
          editor: {
            label: "Content editor",
            type: "ButtonLink"
          },
          content: "Unsubscribe",
          props: {
            href: "https://example.com/unsubscribe",
            target: "_blank",
          },
          style: {
            color: "#2563eb",
            borderRadius: "0px"
          },
        },
      }
    }
  }
}

export const template2: EmailTemplate = {
  "templateId": "minimal-clean-template-003",
  "templateName": "Minimalist Clean Email",
  "templateConfig": {
    "backgroundColor": "#FFFFFF",
    "canvasColor": "#FFFFFF",
    "maxWidth": "600px",
  },
  "blockIds": [
    "block-1",
    "block-2",
    "block-3",
    "block-4",
    "block-5",
    "block-6"
  ],
  "blocks": {
    "block-1": {
      "rootId": "logo-bar",
      "nodes": {
        "logo-bar": {
          "parentId": null,
          "childrens": [
            "logo-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "20px",
            "paddingLeft": "40px",
            "paddingRight": "40px",
            "backgroundColor": "#FFFFFF",
            "textAlign": "left"
          },
          "editor": {
            "label": "Brand Logo",
            "type": "Container"
          },
        },
        "logo-text": {
          "parentId": "logo-bar",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Brand Logo",
            "type": "Text"
          },
          "content": "◆ LUXE",
          "style": {
            "margin": "0",
            "color": "#1A1A1A",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "3px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-2": {
      "rootId": "hero-text-block",
      "nodes": {
        "hero-text-block": {
          "parentId": null,
          "childrens": [
            "hero-greeting",
            "hero-main-text",
            "hero-subtext"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "60px",
            "paddingBottom": "60px",
            "paddingLeft": "40px",
            "paddingRight": "40px",
            "backgroundColor": "#FFFFFF",
            "textAlign": "center"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        },
        "hero-greeting": {
          "parentId": "hero-text-block",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Greeting",
            "type": "Text"
          },
          "content": "Hello there,",
          "style": {
            "margin": "0 0 20px 0",
            "color": "#999999",
            "fontSize": "14px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "1px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "20px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "hero-main-text": {
          "parentId": "hero-text-block",
          "childrens": [],
          "tagName": "h1",
          "editor": {
            "label": "Main Heading",
            "type": "Text"
          },
          "content": "Something Beautiful Awaits",
          "style": {
            "margin": "0 0 30px 0",
            "color": "#1A1A1A",
            "fontSize": "36px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "-1px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "48px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "hero-subtext": {
          "parentId": "hero-text-block",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Subtitle",
            "type": "Text"
          },
          "content": "Discover our exclusive collection curated just for you.",
          "style": {
            "margin": "0",
            "color": "#555555",
            "fontSize": "16px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "24px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-3": {
      "rootId": "image-block",
      "nodes": {
        "image-block": {
          "parentId": null,
          "childrens": [
            "featured-image"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "60px",
            "paddingLeft": "40px",
            "paddingRight": "40px",
            "backgroundColor": "#FFFFFF",
            "textAlign": "center"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        },
        "featured-image": {
          "parentId": "image-block",
          "childrens": [],
          "tagName": "img",
          "editor": {
            "label": "Featured Image",
            "type": "Image"
          },
          "props": {
            "src": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1vfElUZA_UyNLogieSOePVUTgX-l2szFs-0p18ypkuFJdjLw4VKSaX9d-2rpHbm7pqayFbsugD1748agfO_7AojsPra9B",
            "alt": "Premium Collection"
          },
          "style": {
            "display": "block",
            "width": "100%",
            "height": "300px",
            "maxWidth": "100%",
            "margin": "0 auto",
            "objectFit": "contain",
            "border": "0",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "0px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-4": {
      "rootId": "content-block",
      "nodes": {
        "content-block": {
          "parentId": null,
          "childrens": [
            "content-title",
            "content-paragraph",
            "content-highlight"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "50px",
            "paddingLeft": "40px",
            "paddingRight": "40px",
            "backgroundColor": "#FFFFFF",
            "textAlign": "left"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        },
        "content-title": {
          "parentId": "content-block",
          "childrens": [],
          "tagName": "h2",
          "editor": {
            "label": "Section Title",
            "type": "Text"
          },
          "content": "Why Choose Us",
          "style": {
            "margin": "0 0 20px 0",
            "color": "#1A1A1A",
            "fontSize": "28px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "36px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "content-paragraph": {
          "parentId": "content-block",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Body Text",
            "type": "Text"
          },
          "content": "We believe in timeless elegance and uncompromising quality. Each piece in our collection is carefully selected to bring sophistication and beauty into your life. Experience the difference of curated excellence.",
          "style": {
            "margin": "0 0 25px 0",
            "color": "#555555",
            "fontSize": "15px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "24px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "content-highlight": {
          "parentId": "content-block",
          "childrens": [],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#F5F5F5",
            "textAlign": "left",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        }
      }
    },
    "block-5": {
      "rootId": "benefits-block",
      "nodes": {
        "benefits-block": {
          "parentId": null,
          "childrens": [
            "benefit-1",
            "benefit-2",
            "benefit-3"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "50px",
            "paddingLeft": "40px",
            "paddingRight": "40px",
            "backgroundColor": "#FFFFFF",
            "textAlign": "left"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        },
        "benefit-1": {
          "parentId": "benefits-block",
          "childrens": [
            "benefit-1-number",
            "benefit-1-title",
            "benefit-1-text"
          ],
          "tagName": "div",
          "style": {
            "marginBottom": "40px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        },
        "benefit-1-number": {
          "parentId": "benefit-1",
          "childrens": [],
          "tagName": "p",
          "content": "01",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#CCCCCC",
            "fontSize": "36px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "2px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "lineHeight": "42px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "benefit-1-title": {
          "parentId": "benefit-1",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Benefit 1 Title",
            "type": "Text"
          },
          "content": "Premium Quality",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#1A1A1A",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "benefit-1-text": {
          "parentId": "benefit-1",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Benefit 1 Description",
            "type": "Text"
          },
          "content": "Handpicked materials and meticulous craftsmanship in every piece.",
          "style": {
            "margin": "0",
            "color": "#999999",
            "fontSize": "13px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "18px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "benefit-2": {
          "parentId": "benefits-block",
          "childrens": [
            "benefit-2-number",
            "benefit-2-title",
            "benefit-2-text"
          ],
          "tagName": "div",
          "style": {
            "marginBottom": "40px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        },
        "benefit-2-number": {
          "parentId": "benefit-2",
          "childrens": [],
          "tagName": "p",
          "content": "02",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#CCCCCC",
            "fontSize": "36px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "2px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "lineHeight": "42px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "benefit-2-title": {
          "parentId": "benefit-2",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Benefit 2 Title",
            "type": "Text"
          },
          "content": "Fast Shipping",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#1A1A1A",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "benefit-2-text": {
          "parentId": "benefit-2",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Benefit 2 Description",
            "type": "Text"
          },
          "content": "Discreet packaging and swift delivery directly to your doorstep.",
          "style": {
            "margin": "0",
            "color": "#999999",
            "fontSize": "13px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "18px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "benefit-3": {
          "parentId": "benefits-block",
          "childrens": [
            "benefit-3-number",
            "benefit-3-title",
            "benefit-3-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        },
        "benefit-3-number": {
          "parentId": "benefit-3",
          "childrens": [],
          "tagName": "p",
          "content": "03",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#CCCCCC",
            "fontSize": "36px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "2px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "lineHeight": "42px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "benefit-3-title": {
          "parentId": "benefit-3",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Benefit 3 Title",
            "type": "Text"
          },
          "content": "Satisfaction Guaranteed",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#1A1A1A",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "benefit-3-text": {
          "parentId": "benefit-3",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Benefit 3 Description",
            "type": "Text"
          },
          "content": "Hassle-free returns within 30 days if you're not completely satisfied.",
          "style": {
            "margin": "0",
            "color": "#999999",
            "fontSize": "13px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "18px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "left",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-6": {
      "rootId": "footer-block",
      "nodes": {
        "footer-block": {
          "parentId": null,
          "childrens": [
            "footer-cta",
            "footer-divider",
            "footer-text",
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "40px",
            "paddingRight": "40px",
            "backgroundColor": "#FFFFFF",
            "textAlign": "center",
            "borderTop": "1px solid #EEEEEE"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        },
        "footer-cta": {
          "parentId": "footer-block",
          "childrens": [],
          "tagName": "a",
          "editor": {
            "label": "Explore Now Button",
            "type": "ButtonLink"
          },
          "props": {
            "href": "https://example.com"
          },
          "content": "Explore Collection",
          "style": {
            "display": "inline-block",
            "paddingTop": "16px",
            "paddingBottom": "16px",
            "paddingLeft": "40px",
            "paddingRight": "40px",
            "backgroundColor": "#1A1A1A",
            "color": "#FFFFFF",
            "fontSize": "13px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "1px",
            "textAlign": "center",
            "lineHeight": "18px",
            "textDecoration": "none",
            "marginBottom": "30px"
          }
        },
        "footer-divider": {
          "parentId": "footer-block",
          "childrens": [],
          "tagName": "div",
          "style": {
            "height": "1px",
            "backgroundColor": "#EEEEEE",
            "marginBottom": "30px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "textAlign": "center",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Container settings",
            "type": "Container"
          },
        },
        "footer-text": {
          "parentId": "footer-block",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Footer Description",
            "type": "Text"
          },
          "content": "Thank you for being part of our community. We appreciate your continued support.",
          "style": {
            "margin": "0 0 25px 0",
            "color": "#999999",
            "fontSize": "12px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "18px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    }
  }
}

export const TEMPLATE_LIST = [template1, template2];
