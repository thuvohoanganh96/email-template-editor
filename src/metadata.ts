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

export const template3: EmailTemplate = {
  "templateId": "vibrant-modern-template-005",
  "templateName": "Vibrant Modern Colorful Email",
  "templateConfig": {
    "backgroundColor": "#F5F5F5",
    "canvasColor": "#FFFFFF",
    "maxWidth": "600px"
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
      "rootId": "gradient-header",
      "nodes": {
        "gradient-header": {
          "parentId": null,
          "childrens": [
            "header-content"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#7080C4",
            "textAlign": "center"
          },
          "editor": {
            "label": "Header Container",
            "type": "Container"
          }
        },
        "header-content": {
          "parentId": "gradient-header",
          "childrens": [
            "header-subtitle",
            "header-title"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Header Content",
            "type": "Container"
          }
        },
        "header-subtitle": {
          "parentId": "header-content",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Subtitle",
            "type": "Text"
          },
          "content": "EXCLUSIVE COLLECTION",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#FFFFFF",
            "fontSize": "12px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "2px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "header-title": {
          "parentId": "header-content",
          "childrens": [],
          "tagName": "h1",
          "editor": {
            "label": "Main Title",
            "type": "Text"
          },
          "content": "Spring Collection 2024",
          "style": {
            "margin": "0",
            "color": "#FFFFFF",
            "fontSize": "38px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "48px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-2": {
      "rootId": "promo-banner",
      "nodes": {
        "promo-banner": {
          "parentId": null,
          "childrens": [
            "promo-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "25px",
            "paddingBottom": "25px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#F0A840",
            "textAlign": "center"
          },
          "editor": {
            "label": "Promo Banner",
            "type": "Container"
          }
        },
        "promo-text": {
          "parentId": "promo-banner",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Promo Message",
            "type": "Text"
          },
          "content": "🎉 Get 40% OFF on everything! Use code: SPRING40",
          "style": {
            "margin": "0",
            "color": "#FFFFFF",
            "fontSize": "16px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-3": {
      "rootId": "hero-image-block",
      "nodes": {
        "hero-image-block": {
          "parentId": null,
          "childrens": [
            "hero-image"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "30px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "#FFFFFF",
            "textAlign": "center"
          },
          "editor": {
            "label": "Hero Image Container",
            "type": "Container"
          }
        },
        "hero-image": {
          "parentId": "hero-image-block",
          "childrens": [],
          "tagName": "img",
          "editor": {
            "label": "Hero Image",
            "type": "Image"
          },
          "props": {
            "src": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=300&fit=crop",
            "alt": "Spring Collection"
          },
          "style": {
            "display": "block",
            "width": "100%",
            "height": "300px",
            "maxWidth": "100%",
            "margin": "0",
            "objectFit": "cover",
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
      "rootId": "features-grid",
      "nodes": {
        "features-grid": {
          "parentId": null,
          "childrens": [
            "grid-title",
            "feature-card-1",
            "feature-card-2",
            "feature-card-3"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "30px",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "backgroundColor": "#FFFFFF",
            "textAlign": "center"
          },
          "editor": {
            "label": "Features Grid",
            "type": "Container"
          }
        },
        "grid-title": {
          "parentId": "features-grid",
          "childrens": [],
          "tagName": "h2",
          "editor": {
            "label": "Grid Title",
            "type": "Text"
          },
          "content": "Why Our Customers Love Us",
          "style": {
            "margin": "0 0 35px 0",
            "color": "#1A1A1A",
            "fontSize": "28px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "36px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "feature-card-1": {
          "parentId": "features-grid",
          "childrens": [
            "card-1-icon",
            "card-1-title",
            "card-1-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "25px",
            "paddingBottom": "25px",
            "paddingLeft": "25px",
            "paddingRight": "25px",
            "backgroundColor": "#88B4AC",
            "textAlign": "center",
            "marginBottom": "20px",
            "borderRadius": "8px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Feature Card 1",
            "type": "Container"
          }
        },
        "card-1-icon": {
          "parentId": "feature-card-1",
          "childrens": [],
          "tagName": "p",
          "content": "✨",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#FFFFFF",
            "fontSize": "32px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "36px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-1-title": {
          "parentId": "feature-card-1",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Card Title",
            "type": "Text"
          },
          "content": "Premium Quality",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#FFFFFF",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-1-text": {
          "parentId": "feature-card-1",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Card Description",
            "type": "Text"
          },
          "content": "Crafted with care and attention to detail.",
          "style": {
            "margin": "0",
            "color": "#FFFFFF",
            "fontSize": "13px",
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
        },
        "feature-card-2": {
          "parentId": "features-grid",
          "childrens": [
            "card-2-icon",
            "card-2-title",
            "card-2-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "25px",
            "paddingBottom": "25px",
            "paddingLeft": "25px",
            "paddingRight": "25px",
            "backgroundColor": "#5868B4",
            "textAlign": "center",
            "marginBottom": "20px",
            "borderRadius": "8px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Feature Card 2",
            "type": "Container"
          }
        },
        "card-2-icon": {
          "parentId": "feature-card-2",
          "childrens": [],
          "tagName": "p",
          "content": "🚀",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#FFFFFF",
            "fontSize": "32px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "36px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-2-title": {
          "parentId": "feature-card-2",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Card Title",
            "type": "Text"
          },
          "content": "Fast Shipping",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#FFFFFF",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-2-text": {
          "parentId": "feature-card-2",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Card Description",
            "type": "Text"
          },
          "content": "Delivered to your door within 48 hours.",
          "style": {
            "margin": "0",
            "color": "#FFFFFF",
            "fontSize": "13px",
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
        },
        "feature-card-3": {
          "parentId": "features-grid",
          "childrens": [
            "card-3-icon",
            "card-3-title",
            "card-3-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "25px",
            "paddingBottom": "25px",
            "paddingLeft": "25px",
            "paddingRight": "25px",
            "backgroundColor": "#D88E28",
            "textAlign": "center",
            "marginBottom": "0px",
            "borderRadius": "8px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Feature Card 3",
            "type": "Container"
          }
        },
        "card-3-icon": {
          "parentId": "feature-card-3",
          "childrens": [],
          "tagName": "p",
          "content": "💎",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#FFFFFF",
            "fontSize": "32px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "36px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-3-title": {
          "parentId": "feature-card-3",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Card Title",
            "type": "Text"
          },
          "content": "VIP Rewards",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#FFFFFF",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-3-text": {
          "parentId": "feature-card-3",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Card Description",
            "type": "Text"
          },
          "content": "Earn points on every purchase.",
          "style": {
            "margin": "0",
            "color": "#FFFFFF",
            "fontSize": "13px",
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
    },
    "block-5": {
      "rootId": "cta-section",
      "nodes": {
        "cta-section": {
          "parentId": null,
          "childrens": [
            "cta-box"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#BC3C3C",
            "textAlign": "center"
          },
          "editor": {
            "label": "CTA Section",
            "type": "Container"
          }
        },
        "cta-box": {
          "parentId": "cta-section",
          "childrens": [
            "cta-heading",
            "cta-description",
            "cta-button"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "CTA Box",
            "type": "Container"
          }
        },
        "cta-heading": {
          "parentId": "cta-box",
          "childrens": [],
          "tagName": "h2",
          "editor": {
            "label": "CTA Heading",
            "type": "Text"
          },
          "content": "Don't Miss Out!",
          "style": {
            "margin": "0 0 15px 0",
            "color": "#FFFFFF",
            "fontSize": "32px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "40px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "cta-description": {
          "parentId": "cta-box",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "CTA Description",
            "type": "Text"
          },
          "content": "Shop now and get exclusive access to our limited edition items.",
          "style": {
            "margin": "0 0 30px 0",
            "color": "#FFFFFF",
            "fontSize": "15px",
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
        },
        "cta-button": {
          "parentId": "cta-box",
          "childrens": [],
          "tagName": "a",
          "editor": {
            "label": "Shop Now Button",
            "type": "ButtonLink"
          },
          "props": {
            "href": "https://example.com/shop"
          },
          "content": "Shop Now",
          "style": {
            "display": "inline-block",
            "paddingTop": "14px",
            "paddingBottom": "14px",
            "paddingLeft": "40px",
            "paddingRight": "40px",
            "backgroundColor": "#FFFFFF",
            "color": "#BC3C3C",
            "fontSize": "15px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "1px",
            "textAlign": "center",
            "lineHeight": "20px",
            "textDecoration": "none"
          }
        }
      }
    },
    "block-6": {
      "rootId": "footer-section",
      "nodes": {
        "footer-section": {
          "parentId": null,
          "childrens": [
            "footer-content"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#333333",
            "textAlign": "center"
          },
          "editor": {
            "label": "Footer Section",
            "type": "Container"
          }
        },
        "footer-content": {
          "parentId": "footer-section",
          "childrens": [
            "footer-text",
            "footer-links"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Footer Content",
            "type": "Container"
          }
        },
        "footer-text": {
          "parentId": "footer-content",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Footer Text",
            "type": "Text"
          },
          "content": "© 2024 Your Brand. All rights reserved.",
          "style": {
            "margin": "0 0 20px 0",
            "color": "#BBBBBB",
            "fontSize": "11px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "lineHeight": "16px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "footer-links": {
          "parentId": "footer-content",
          "childrens": [
            "footer-link-1",
            "footer-link-2",
            "footer-link-3"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Footer Links",
            "type": "Container"
          }
        },
        "footer-link-1": {
          "parentId": "footer-links",
          "childrens": [],
          "tagName": "a",
          "props": {
            "href": "https://example.com/unsubscribe"
          },
          "content": "Unsubscribe",
          "style": {
            "color": "#999999",
            "fontSize": "10px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "textDecoration": "none",
            "marginRight": "15px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "14px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          },
          "editor": {
            "label": "Unsubscribe Link",
            "type": "ButtonLink"
          }
        },
        "footer-link-2": {
          "parentId": "footer-links",
          "childrens": [],
          "tagName": "a",
          "props": {
            "href": "https://example.com/privacy"
          },
          "content": "Privacy Policy",
          "style": {
            "color": "#999999",
            "fontSize": "10px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "textDecoration": "none",
            "marginRight": "15px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "14px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          },
          "editor": {
            "label": "Privacy Policy Link",
            "type": "ButtonLink"
          }
        },
        "footer-link-3": {
          "parentId": "footer-links",
          "childrens": [],
          "tagName": "a",
          "props": {
            "href": "https://example.com/contact"
          },
          "content": "Contact Us",
          "style": {
            "color": "#999999",
            "fontSize": "10px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "textDecoration": "none",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "14px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          },
          "editor": {
            "label": "Contact Us Link",
            "type": "ButtonLink"  
          }
        }
      }
    }
  }
}

export const template4: EmailTemplate = {
  "templateId": "bold-gradient-template-006",
  "templateName": "Bold Gradient Colorful Email",
  "templateConfig": {
    "backgroundColor": "#F5F5F5",
    "canvasColor": "#FFFFFF",
    "maxWidth": "600px"
  },
  "blockIds": [
    "block-1",
    "block-2",
    "block-3",
    "block-4",
    "block-5",
    "block-6",
    "block-7"
  ],
  "blocks": {
    "block-1": {
      "rootId": "intro-banner",
      "nodes": {
        "intro-banner": {
          "parentId": null,
          "childrens": [
            "intro-content"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "50px",
            "paddingBottom": "50px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#C4ACD8",
            "textAlign": "center"
          },
          "editor": {
            "label": "Intro Banner",
            "type": "Container"
          }
        },
        "intro-content": {
          "parentId": "intro-banner",
          "childrens": [
            "intro-emoji",
            "intro-title",
            "intro-subtitle"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Intro Content",
            "type": "Container"
          }
        },
        "intro-emoji": {
          "parentId": "intro-content",
          "childrens": [],
          "tagName": "p",
          "content": "🌟",
          "style": {
            "margin": "0 0 15px 0",
            "color": "#FFFFFF",
            "fontSize": "48px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "52px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "intro-title": {
          "parentId": "intro-content",
          "childrens": [],
          "tagName": "h1",
          "editor": {
            "label": "Intro Title",
            "type": "Text"
          },
          "content": "Welcome to Something Amazing",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#FFFFFF",
            "fontSize": "36px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "44px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "intro-subtitle": {
          "parentId": "intro-content",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Intro Subtitle",
            "type": "Text"
          },
          "content": "New arrivals just landed with incredible savings",
          "style": {
            "margin": "0",
            "color": "#FFFFFF",
            "fontSize": "15px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "22px",
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
    "block-2": {
      "rootId": "special-offer",
      "nodes": {
        "special-offer": {
          "parentId": null,
          "childrens": [
            "offer-box"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#E8D828",
            "textAlign": "center"
          },
          "editor": {
            "label": "Special Offer",
            "type": "Container"
          }
        },
        "offer-box": {
          "parentId": "special-offer",
          "childrens": [
            "offer-label",
            "offer-value"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Offer Box",
            "type": "Container"
          }
        },
        "offer-label": {
          "parentId": "offer-box",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Offer Label",
            "type": "Text"
          },
          "content": "LIMITED TIME OFFER",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#1A1A1A",
            "fontSize": "11px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "2px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "14px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "offer-value": {
          "parentId": "offer-box",
          "childrens": [],
          "tagName": "h2",
          "editor": {
            "label": "Offer Value",
            "type": "Text"
          },
          "content": "SAVE UP TO 60%",
          "style": {
            "margin": "0",
            "color": "#1A1A1A",
            "fontSize": "32px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "1px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "40px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-3": {
      "rootId": "products-showcase",
      "nodes": {
        "products-showcase": {
          "parentId": null,
          "childrens": [
            "products-title",
            "product-row-1",
            "product-row-2"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "30px",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "backgroundColor": "#FFFFFF",
            "textAlign": "center"
          },
          "editor": {
            "label": "Products Showcase",
            "type": "Container"
          }
        },
        "products-title": {
          "parentId": "products-showcase",
          "childrens": [],
          "tagName": "h2",
          "editor": {
            "label": "Products Title",
            "type": "Text"
          },
          "content": "Featured Collections",
          "style": {
            "margin": "0 0 30px 0",
            "color": "#1A1A1A",
            "fontSize": "28px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "36px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "product-row-1": {
          "parentId": "products-showcase",
          "childrens": [
            "product-card-1",
            "product-card-2"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "20px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Product Row 1",
            "type": "Container"
          }
        },
        "product-card-1": {
          "parentId": "product-row-1",
          "childrens": [
            "card-1-image",
            "card-1-name",
            "card-1-price"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "10px",
            "paddingRight": "10px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px",
            "marginBottom": "20px"
          },
          "editor": {
            "label": "Product Card 1",
            "type": "Container"
          }
        },
        "card-1-image": {
          "parentId": "product-card-1",
          "childrens": [],
          "tagName": "div",
          "style": {
            "paddingTop": "15px",
            "paddingBottom": "15px",
            "paddingLeft": "15px",
            "paddingRight": "15px",
            "backgroundColor": "#88B4AC",
            "textAlign": "center",
            "borderRadius": "8px",
            "marginBottom": "12px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px",
          },
          "editor": {
            "label": "Product Image",
            "type": "Container"
          }
        },
        "card-1-name": {
          "parentId": "product-card-1",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Product Name",
            "type": "Text"
          },
          "content": "Summer Collection",
          "style": {
            "margin": "0 0 6px 0",
            "color": "#1A1A1A",
            "fontSize": "14px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "18px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-1-price": {
          "parentId": "product-card-1",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Product Price",
            "type": "Text"
          },
          "content": "From $29",
          "style": {
            "margin": "0",
            "color": "#88B4AC",
            "fontSize": "13px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "product-card-2": {
          "parentId": "product-row-1",
          "childrens": [
            "card-2-image",
            "card-2-name",
            "card-2-price"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "10px",
            "paddingRight": "10px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px",
            "marginBottom": "20px"
          },
          "editor": {
            "label": "Product Card 2",
            "type": "Container"
          }
        },
        "card-2-image": {
          "parentId": "product-card-2",
          "childrens": [],
          "tagName": "div",
          "style": {
            "paddingTop": "15px",
            "paddingBottom": "15px",
            "paddingLeft": "15px",
            "paddingRight": "15px",
            "backgroundColor": "#C4ACD8",
            "textAlign": "center",
            "borderRadius": "8px",
            "marginBottom": "12px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px",
          },
          "editor": {
            "label": "Product Image",
            "type": "Container"
          }
        },
        "card-2-name": {
          "parentId": "product-card-2",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Product Name",
            "type": "Text"
          },
          "content": "Premium Essentials",
          "style": {
            "margin": "0 0 6px 0",
            "color": "#1A1A1A",
            "fontSize": "14px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "18px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-2-price": {
          "parentId": "product-card-2",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Product Price",
            "type": "Text"
          },
          "content": "From $39",
          "style": {
            "margin": "0",
            "color": "#C4ACD8",
            "fontSize": "13px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "product-row-2": {
          "parentId": "products-showcase",
          "childrens": [
            "product-card-3",
            "product-card-4"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Product Row 2",
            "type": "Container"
          }
        },
        "product-card-3": {
          "parentId": "product-row-2",
          "childrens": [
            "card-3-image",
            "card-3-name",
            "card-3-price"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "10px",
            "paddingRight": "10px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px",
            "marginBottom": "20px"
          },
          "editor": {
            "label": "Product Card 3",
            "type": "Container"
          }
        },
        "card-3-image": {
          "parentId": "product-card-3",
          "childrens": [],
          "tagName": "div",
          "style": {
            "paddingTop": "15px",
            "paddingBottom": "15px",
            "paddingLeft": "15px",
            "paddingRight": "15px",
            "backgroundColor": "#6CA49C",
            "textAlign": "center",
            "borderRadius": "8px",
            "marginBottom": "12px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px",
          },
          "editor": {
            "label": "Product Image",
            "type": "Container"
          }
        },
        "card-3-name": {
          "parentId": "product-card-3",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Product Name",
            "type": "Text"
          },
          "content": "Accessories",
          "style": {
            "margin": "0 0 6px 0",
            "color": "#1A1A1A",
            "fontSize": "14px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "18px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-3-price": {
          "parentId": "product-card-3",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Product Price",
            "type": "Text"
          },
          "content": "From $15",
          "style": {
            "margin": "0",
            "color": "#6CA49C",
            "fontSize": "13px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "product-card-4": {
          "parentId": "product-row-2",
          "childrens": [
            "card-4-image",
            "card-4-name",
            "card-4-price"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "10px",
            "paddingRight": "10px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Product Card 4",
            "type": "Container"
          }
        },
        "card-4-image": {
          "parentId": "product-card-4",
          "childrens": [],
          "tagName": "div",
          "style": {
            "paddingTop": "15px",
            "paddingBottom": "15px",
            "paddingLeft": "15px",
            "paddingRight": "15px",
            "backgroundColor": "#B09CCE",
            "textAlign": "center",
            "borderRadius": "8px",
            "marginBottom": "12px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px",
          },
          "editor": {
            "label": "Product Image",
            "type": "Container"
          }
        },
        "card-4-name": {
          "parentId": "product-card-4",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Product Name",
            "type": "Text"
          },
          "content": "Limited Edition",
          "style": {
            "margin": "0 0 6px 0",
            "color": "#1A1A1A",
            "fontSize": "14px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "18px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-4-price": {
          "parentId": "product-card-4",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Product Price",
            "type": "Text"
          },
          "content": "From $49",
          "style": {
            "margin": "0",
            "color": "#B09CCE",
            "fontSize": "13px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-4": {
      "rootId": "testimonials-section",
      "nodes": {
        "testimonials-section": {
          "parentId": null,
          "childrens": [
            "testimonials-title",
            "testimonial-item"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#50948C",
            "textAlign": "center"
          },
          "editor": {
            "label": "Testimonials Section",
            "type": "Container"
          }
        },
        "testimonials-title": {
          "parentId": "testimonials-section",
          "childrens": [],
          "tagName": "h2",
          "editor": {
            "label": "Testimonials Title",
            "type": "Text"
          },
          "content": "Loved by 10,000+ Customers",
          "style": {
            "margin": "0 0 30px 0",
            "color": "#FFFFFF",
            "fontSize": "26px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "32px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "testimonial-item": {
          "parentId": "testimonials-section",
          "childrens": [
            "testimonial-stars",
            "testimonial-text",
            "testimonial-author"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "20px",
            "paddingBottom": "20px",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "backgroundColor": "rgba(255,255,255,0.1)",
            "textAlign": "center",
            "borderRadius": "8px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Testimonial Item",
            "type": "Container"
          }
        },
        "testimonial-stars": {
          "parentId": "testimonial-item",
          "childrens": [],
          "tagName": "p",
          "content": "⭐⭐⭐⭐⭐",
          "style": {
            "margin": "0 0 10px 0",
            "color": "#FFFFFF",
            "fontSize": "16px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "20px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "testimonial-text": {
          "parentId": "testimonial-item",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Testimonial Text",
            "type": "Text"
          },
          "content": "Absolutely stunning quality! The attention to detail is incredible.",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#FFFFFF",
            "fontSize": "14px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "20px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "testimonial-author": {
          "parentId": "testimonial-item",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Author Name",
            "type": "Text"
          },
          "content": "— Sarah M.",
          "style": {
            "margin": "0",
            "color": "#E8D828",
            "fontSize": "12px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-5": {
      "rootId": "newsletter-signup",
      "nodes": {
        "newsletter-signup": {
          "parentId": null,
          "childrens": [
            "newsletter-content"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#4050A4",
            "textAlign": "center"
          },
          "editor": {
            "label": "Newsletter Signup",
            "type": "Container"
          }
        },
        "newsletter-content": {
          "parentId": "newsletter-signup",
          "childrens": [
            "newsletter-title",
            "newsletter-text",
            "newsletter-button"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Newsletter Content",
            "type": "Container"
          }
        },
        "newsletter-title": {
          "parentId": "newsletter-content",
          "childrens": [],
          "tagName": "h2",
          "editor": {
            "label": "Newsletter Title",
            "type": "Text"
          },
          "content": "Get the Latest Updates",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#FFFFFF",
            "fontSize": "24px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "32px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "newsletter-text": {
          "parentId": "newsletter-content",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Newsletter Text",
            "type": "Text"
          },
          "content": "Subscribe to our newsletter for exclusive deals and insider tips.",
          "style": {
            "margin": "0 0 25px 0",
            "color": "#FFFFFF",
            "fontSize": "14px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "20px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "newsletter-button": {
          "parentId": "newsletter-content",
          "childrens": [],
          "tagName": "a",
          "editor": {
            "label": "Subscribe Button",
            "type": "ButtonLink"
          },
          "props": {
            "href": "https://example.com/subscribe"
          },
          "content": "Subscribe Now",
          "style": {
            "display": "inline-block",
            "paddingTop": "12px",
            "paddingBottom": "12px",
            "paddingLeft": "35px",
            "paddingRight": "35px",
            "backgroundColor": "#E8D828",
            "color": "#1A1A1A",
            "fontSize": "14px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "1px",
            "textAlign": "center",
            "lineHeight": "18px",
            "textDecoration": "none"
          }
        }
      }
    },
    "block-6": {
      "rootId": "trust-badges",
      "nodes": {
        "trust-badges": {
          "parentId": null,
          "childrens": [
            "badge-1",
            "badge-2",
            "badge-3"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#F5F5F5",
            "textAlign": "center"
          },
          "editor": {
            "label": "Trust Badges",
            "type": "Container"
          }
        },
        "badge-1": {
          "parentId": "trust-badges",
          "childrens": [
            "badge-1-icon",
            "badge-1-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "15px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Trust Badge 1",
            "type": "Container"
          }
        },
        "badge-1-icon": {
          "parentId": "badge-1",
          "childrens": [],
          "tagName": "p",
          "content": "✓",
          "style": {
            "margin": "0 0 5px 0",
            "color": "#50948C",
            "fontSize": "24px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "28px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "badge-1-text": {
          "parentId": "badge-1",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Badge Text",
            "type": "Text"
          },
          "content": "Free Shipping Over $50",
          "style": {
            "margin": "0",
            "color": "#555555",
            "fontSize": "12px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "badge-2": {
          "parentId": "trust-badges",
          "childrens": [
            "badge-2-icon",
            "badge-2-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "15px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Trust Badge 2",
            "type": "Container"
          }
        },
        "badge-2-icon": {
          "parentId": "badge-2",
          "childrens": [],
          "tagName": "p",
          "content": "🔒",
          "style": {
            "margin": "0 0 5px 0",
            "color": "#4050A4",
            "fontSize": "24px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "28px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "badge-2-text": {
          "parentId": "badge-2",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Badge Text",
            "type": "Text"
          },
          "content": "100% Secure Checkout",
          "style": {
            "margin": "0",
            "color": "#555555",
            "fontSize": "12px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "badge-3": {
          "parentId": "trust-badges",
          "childrens": [
            "badge-3-icon",
            "badge-3-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Trust Badge 3",
            "type": "Container"
          }
        },
        "badge-3-icon": {
          "parentId": "badge-3",
          "childrens": [],
          "tagName": "p",
          "content": "↩",
          "style": {
            "margin": "0 0 5px 0",
            "color": "#C4ACD8",
            "fontSize": "24px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "28px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "badge-3-text": {
          "parentId": "badge-3",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Badge Text",
            "type": "Text"
          },
          "content": "30-Day Returns",
          "style": {
            "margin": "0",
            "color": "#555555",
            "fontSize": "12px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-7": {
      "rootId": "footer-final",
      "nodes": {
        "footer-final": {
          "parentId": null,
          "childrens": [
            "footer-links",
            "footer-copyright"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#1A1A1A",
            "textAlign": "center"
          },
          "editor": {
            "label": "Footer Final",
            "type": "Container"
          }
        },
        "footer-links": {
          "parentId": "footer-final",
          "childrens": [
            "link-shop",
            "link-about",
            "link-contact"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "15px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Footer Links",
            "type": "Container"
          }
        },
        "link-shop": {
          "parentId": "footer-links",
          "childrens": [],
          "tagName": "a",
          "props": {
            "href": "https://example.com/shop"
          },
          "content": "Shop",
          "style": {
            "color": "#BBBBBB",
            "fontSize": "11px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "textDecoration": "none",
            "marginRight": "15px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "14px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "link-about": {
          "parentId": "footer-links",
          "childrens": [],
          "tagName": "a",
          "props": {
            "href": "https://example.com/about"
          },
          "content": "About Us",
          "style": {
            "color": "#BBBBBB",
            "fontSize": "11px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "textDecoration": "none",
            "marginRight": "15px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "14px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "link-contact": {
          "parentId": "footer-links",
          "childrens": [],
          "tagName": "a",
          "props": {
            "href": "https://example.com/contact"
          },
          "content": "Contact",
          "style": {
            "color": "#BBBBBB",
            "fontSize": "11px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "textDecoration": "none",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "14px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "footer-copyright": {
          "parentId": "footer-final",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Copyright",
            "type": "Text"
          },
          "content": "© 2024 Your Brand Co. All rights reserved.",
          "style": {
            "margin": "0",
            "color": "#777777",
            "fontSize": "10px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "lineHeight": "14px",
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

export const template5: EmailTemplate = {
  "templateId": "retro-vintage-template-007",
  "templateName": "Retro Vintage Email",
  "templateConfig": {
    "backgroundColor": "#E0CEB8",
    "canvasColor": "#F5E6D3",
    "maxWidth": "600px"
  },
  "blockIds": [
    "block-1",
    "block-2",
    "block-3",
    "block-4",
    "block-5"
  ],
  "blocks": {
    "block-1": {
      "rootId": "retro-header",
      "nodes": {
        "retro-header": {
          "parentId": null,
          "childrens": [
            "header-title",
            "header-subtitle"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#9C7C52",
            "textAlign": "center",
            "borderBottom": "4px solid #744C28"
          },
          "editor": {
            "label": "Retro Header",
            "type": "Container"
          }
        },
        "header-title": {
          "parentId": "retro-header",
          "childrens": [],
          "tagName": "h1",
          "editor": {
            "label": "Header Title",
            "type": "Text"
          },
          "content": "FANTASTIC FINDS",
          "style": {
            "margin": "0 0 10px 0",
            "color": "#F5E6D3",
            "fontSize": "42px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "3px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "52px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "header-subtitle": {
          "parentId": "retro-header",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Subtitle",
            "type": "Text"
          },
          "content": "Groovy Deals from the Archives",
          "style": {
            "margin": "0",
            "color": "#D4B898",
            "fontSize": "14px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "20px",
            "letterSpacing": "1px",
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
    "block-2": {
      "rootId": "featured-section",
      "nodes": {
        "featured-section": {
          "parentId": null,
          "childrens": [
            "featured-title",
            "featured-desc"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#50948C",
            "textAlign": "center"
          },
          "editor": {
            "label": "Featured Section",
            "type": "Container"
          }
        },
        "featured-title": {
          "parentId": "featured-section",
          "childrens": [],
          "tagName": "h2",
          "editor": {
            "label": "Featured Title",
            "type": "Text"
          },
          "content": "This Week's Special",
          "style": {
            "margin": "0 0 15px 0",
            "color": "#FFFFFF",
            "fontSize": "32px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "2px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "40px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "featured-desc": {
          "parentId": "featured-section",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Description",
            "type": "Text"
          },
          "content": "Vintage vibes meet modern prices. Stock up on nostalgia!",
          "style": {
            "margin": "0",
            "color": "#FFFFFF",
            "fontSize": "15px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "22px",
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
      "rootId": "product-section",
      "nodes": {
        "product-section": {
          "parentId": null,
          "childrens": [
            "product-1",
            "product-2"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "backgroundColor": "#F5E6D3",
            "textAlign": "center"
          },
          "editor": {
            "label": "Product Section",
            "type": "Container"
          }
        },
        "product-1": {
          "parentId": "product-section",
          "childrens": [
            "prod-1-box",
            "prod-1-name",
            "prod-1-price"
          ],
          "tagName": "div",
          "style": {
            "marginBottom": "25px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Product 1",
            "type": "Container"
          }
        },
        "prod-1-box": {
          "parentId": "product-1",
          "childrens": [],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#88643C",
            "textAlign": "center",
            "marginBottom": "15px",
            "borderLeft": "5px solid #D4B898",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Product Box",
            "type": "Container"
          }
        },
        "prod-1-name": {
          "parentId": "product-1",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Product Name",
            "type": "Text"
          },
          "content": "Retro Print Collection",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#744C28",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "1px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "prod-1-price": {
          "parentId": "product-1",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Price",
            "type": "Text"
          },
          "content": "Now Just $24.99",
          "style": {
            "margin": "0",
            "color": "#50948C",
            "fontSize": "16px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "20px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "product-2": {
          "parentId": "product-section",
          "childrens": [
            "prod-2-box",
            "prod-2-name",
            "prod-2-price"
          ],
          "tagName": "div",
          "style": {
            "marginBottom": "0px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Product 2",
            "type": "Container"
          }
        },
        "prod-2-box": {
          "parentId": "product-2",
          "childrens": [],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#C4A47E",
            "textAlign": "center",
            "marginBottom": "15px",
            "borderLeft": "5px solid #88643C",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Product Box",
            "type": "Container"
          }
        },
        "prod-2-name": {
          "parentId": "product-2",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Product Name",
            "type": "Text"
          },
          "content": "Classic Accessories",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#744C28",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "1px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "prod-2-price": {
          "parentId": "product-2",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Price",
            "type": "Text"
          },
          "content": "Was $35, Now $19.99",
          "style": {
            "margin": "0",
            "color": "#50948C",
            "fontSize": "16px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "20px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-4": {
      "rootId": "call-to-action",
      "nodes": {
        "call-to-action": {
          "parentId": null,
          "childrens": [
            "cta-button"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#F0A840",
            "textAlign": "center"
          },
          "editor": {
            "label": "Call to Action",
            "type": "Container"
          }
        },
        "cta-button": {
          "parentId": "call-to-action",
          "childrens": [],
          "tagName": "a",
          "editor": {
            "label": "Shop Button",
            "type": "ButtonLink"
          },
          "props": {
            "href": "https://example.com/shop"
          },
          "content": "SHOP NOW",
          "style": {
            "display": "inline-block",
            "paddingTop": "15px",
            "paddingBottom": "15px",
            "paddingLeft": "45px",
            "paddingRight": "45px",
            "backgroundColor": "#744C28",
            "color": "#F5E6D3",
            "fontSize": "16px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "2px",
            "textAlign": "center",
            "lineHeight": "22px",
            "textDecoration": "none"
          }
        }
      }
    },
    "block-5": {
      "rootId": "footer-retro",
      "nodes": {
        "footer-retro": {
          "parentId": null,
          "childrens": [
            "footer-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#9C7C52",
            "textAlign": "center",
            "borderTop": "3px dashed #744C28"
          },
          "editor": {
            "label": "Footer Retro",
            "type": "Container"
          }
        },
        "footer-text": {
          "parentId": "footer-retro",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Footer Text",
            "type": "Text"
          },
          "content": "© 2024 Retro Vintage Co. Keep it groovy!",
          "style": {
            "margin": "0",
            "color": "#F5E6D3",
            "fontSize": "12px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "16px",
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

export const template6: EmailTemplate = {
  "templateId": "dark-mode-modern-template-008",
  "templateName": "Dark Mode Modern Email",
  "templateConfig": {
    "backgroundColor": "#0A0E27",
    "canvasColor": "#0F1633",
    "maxWidth": "600px"
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
      "rootId": "dark-header",
      "nodes": {
        "dark-header": {
          "parentId": null,
          "childrens": [
            "dark-title"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "50px",
            "paddingBottom": "50px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#0F1633",
            "textAlign": "center"
          },
          "editor": {
            "label": "Dark Header",
            "type": "Container"
          }
        },
        "dark-title": {
          "parentId": "dark-header",
          "childrens": [],
          "tagName": "h1",
          "editor": {
            "label": "Title",
            "type": "Text"
          },
          "content": "Next Generation",
          "style": {
            "margin": "0",
            "color": "#06B6D4",
            "fontSize": "48px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "-1px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "56px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-2": {
      "rootId": "feature-cards",
      "nodes": {
        "feature-cards": {
          "parentId": null,
          "childrens": [
            "feature-card-1",
            "feature-card-2"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "15px",
            "paddingRight": "15px",
            "backgroundColor": "#0F1633",
            "textAlign": "center"
          },
          "editor": {
            "label": "Feature Cards",
            "type": "Container"
          }
        },
        "feature-card-1": {
          "parentId": "feature-cards",
          "childrens": [
            "card-1-icon",
            "card-1-title",
            "card-1-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "25px",
            "paddingBottom": "25px",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "backgroundColor": "#1A2847",
            "textAlign": "center",
            "marginBottom": "15px",
            "borderLeft": "3px solid #06B6D4",
            "borderRadius": "4px"
          },
          "editor": {
            "label": "Feature Card 1",
            "type": "Container"
          }
        },
        "card-1-icon": {
          "parentId": "feature-card-1",
          "childrens": [],
          "tagName": "p",
          "content": "⚡",
          "style": {
            "margin": "0 0 10px 0",
            "color": "#06B6D4",
            "fontSize": "32px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "36px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-1-title": {
          "parentId": "feature-card-1",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Title",
            "type": "Text"
          },
          "content": "Ultra Fast",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#FFFFFF",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-1-text": {
          "parentId": "feature-card-1",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Description",
            "type": "Text"
          },
          "content": "Lightning-speed performance",
          "style": {
            "margin": "0",
            "color": "#A0AEC0",
            "fontSize": "13px",
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
        },
        "feature-card-2": {
          "parentId": "feature-cards",
          "childrens": [
            "card-2-icon",
            "card-2-title",
            "card-2-text"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "25px",
            "paddingBottom": "25px",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "backgroundColor": "#1A2847",
            "textAlign": "center",
            "marginBottom": "0px",
            "borderLeft": "3px solid #EC4899",
            "borderRadius": "4px"
          },
          "editor": {
            "label": "Feature Card 2",
            "type": "Container"
          }
        },
        "card-2-icon": {
          "parentId": "feature-card-2",
          "childrens": [],
          "tagName": "p",
          "content": "🔐",
          "style": {
            "margin": "0 0 10px 0",
            "color": "#EC4899",
            "fontSize": "32px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "36px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-2-title": {
          "parentId": "feature-card-2",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Title",
            "type": "Text"
          },
          "content": "Secure",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#FFFFFF",
            "fontSize": "18px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "24px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "card-2-text": {
          "parentId": "feature-card-2",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Description",
            "type": "Text"
          },
          "content": "Bank-level encryption",
          "style": {
            "margin": "0",
            "color": "#A0AEC0",
            "fontSize": "13px",
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
    },
    "block-3": {
      "rootId": "gradient-cta",
      "nodes": {
        "gradient-cta": {
          "parentId": null,
          "childrens": [
            "gradient-content"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "50px",
            "paddingBottom": "50px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#1A2847",
            "textAlign": "center"
          },
          "editor": {
            "label": "Gradient CTA",
            "type": "Container"
          }
        },
        "gradient-content": {
          "parentId": "gradient-cta",
          "childrens": [
            "grad-headline",
            "grad-button"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Gradient Content",
            "type": "Container"
          }
        },
        "grad-headline": {
          "parentId": "gradient-content",
          "childrens": [],
          "tagName": "h2",
          "editor": {
            "label": "Headline",
            "type": "Text"
          },
          "content": "Experience the Future",
          "style": {
            "margin": "0 0 30px 0",
            "color": "#FFFFFF",
            "fontSize": "32px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "40px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "grad-button": {
          "parentId": "gradient-content",
          "childrens": [],
          "tagName": "a",
          "editor": {
            "label": "Explore Button",
            "type": "ButtonLink"
          },
          "props": {
            "href": "https://example.com/explore"
          },
          "content": "Explore Now",
          "style": {
            "display": "inline-block",
            "paddingTop": "14px",
            "paddingBottom": "14px",
            "paddingLeft": "40px",
            "paddingRight": "40px",
            "backgroundColor": "#06B6D4",
            "color": "#0F1633",
            "fontSize": "15px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "1px",
            "textAlign": "center",
            "lineHeight": "20px",
            "textDecoration": "none"
          }
        }
      }
    },
    "block-4": {
      "rootId": "pricing-preview",
      "nodes": {
        "pricing-preview": {
          "parentId": null,
          "childrens": [
            "pricing-title",
            "price-item"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#0F1633",
            "textAlign": "center"
          },
          "editor": {
            "label": "Pricing Preview",
            "type": "Container"
          }
        },
        "pricing-title": {
          "parentId": "pricing-preview",
          "childrens": [],
          "tagName": "h3",
          "editor": {
            "label": "Title",
            "type": "Text"
          },
          "content": "Simple Pricing",
          "style": {
            "margin": "0 0 25px 0",
            "color": "#FFFFFF",
            "fontSize": "24px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "30px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "price-item": {
          "parentId": "pricing-preview",
          "childrens": [
            "price-amount",
            "price-desc"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "20px",
            "paddingBottom": "20px",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "backgroundColor": "#1A2847",
            "textAlign": "center",
            "borderRadius": "4px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Price Item",
            "type": "Container"
          }
        },
        "price-amount": {
          "parentId": "price-item",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Amount",
            "type": "Text"
          },
          "content": "$29/month",
          "style": {
            "margin": "0 0 8px 0",
            "color": "#06B6D4",
            "fontSize": "28px",
            "fontWeight": "bold",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "34px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "price-desc": {
          "parentId": "price-item",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Description",
            "type": "Text"
          },
          "content": "All features included",
          "style": {
            "margin": "0",
            "color": "#A0AEC0",
            "fontSize": "13px",
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
    },
    "block-5": {
      "rootId": "testimonial-dark",
      "nodes": {
        "testimonial-dark": {
          "parentId": null,
          "childrens": [
            "testimonial-box"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "40px",
            "paddingBottom": "40px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#0F1633",
            "textAlign": "center"
          },
          "editor": {
            "label": "Testimonial Dark",
            "type": "Container"
          }
        },
        "testimonial-box": {
          "parentId": "testimonial-dark",
          "childrens": [
            "testimonial-quote",
            "testimonial-author"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "20px",
            "paddingBottom": "20px",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "backgroundColor": "#1A2847",
            "textAlign": "center",
            "borderLeft": "3px solid #EC4899",
            "borderRadius": "4px",
            "color": "transparent",
            "fontSize": "0px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "letterSpacing": "0px",
            "lineHeight": "0px"
          },
          "editor": {
            "label": "Testimonial Box",
            "type": "Container"
          }
        },
        "testimonial-quote": {
          "parentId": "testimonial-box",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Quote",
            "type": "Text"
          },
          "content": "\"This changed everything for us. Incredibly powerful.\"",
          "style": {
            "margin": "0 0 12px 0",
            "color": "#FFFFFF",
            "fontSize": "14px",
            "fontWeight": "normal",
            "fontFamily": "Georgia",
            "lineHeight": "20px",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        },
        "testimonial-author": {
          "parentId": "testimonial-box",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Author",
            "type": "Text"
          },
          "content": "— Alex Chen, CTO",
          "style": {
            "margin": "0",
            "color": "#06B6D4",
            "fontSize": "12px",
            "fontWeight": "bold",
            "fontFamily": "Helvetica",
            "letterSpacing": "0px",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "lineHeight": "16px",
            "paddingTop": "0px",
            "paddingBottom": "0px",
            "paddingLeft": "0px",
            "paddingRight": "0px"
          }
        }
      }
    },
    "block-6": {
      "rootId": "footer-dark",
      "nodes": {
        "footer-dark": {
          "parentId": null,
          "childrens": [
            "footer-content"
          ],
          "tagName": "div",
          "style": {
            "paddingTop": "30px",
            "paddingBottom": "30px",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "backgroundColor": "#0A0E27",
            "textAlign": "center",
            "borderTop": "1px solid #1A2847"
          },
          "editor": {
            "label": "Footer Dark",
            "type": "Container"
          }
        },
        "footer-content": {
          "parentId": "footer-dark",
          "childrens": [],
          "tagName": "p",
          "editor": {
            "label": "Footer Text",
            "type": "Text"
          },
          "content": "© 2024 Future Tech. All rights reserved.",
          "style": {
            "margin": "0",
            "color": "#718096",
            "fontSize": "11px",
            "fontWeight": "normal",
            "fontFamily": "Helvetica",
            "lineHeight": "16px",
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

export const TEMPLATE_LIST = [template1, template3, template2, template4, template5, template6 ];
