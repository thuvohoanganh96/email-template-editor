import styled from '@emotion/styled';
import { Box } from '@flodesk/grain';

export const HeaderDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 8px;
  background: #a5f3fc;
  box-shadow: 0 0 6px #a5f3fc;
`;

export const FloatingIconButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.45);
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.55);
  }
`;

export const UserBubble = styled.div`
  align-self: flex-end;
  max-width: 80%;
  padding: 8px 12px;
  border-radius: 14px 14px 2px 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 13px;
  line-height: 1.5;
  word-break: break-word;
  margin-left: "auto";
`;

export const AssistantBubble = styled(Box)`
  border-radius: 14px 14px 14px 2px;
  word-break: break-word;
`;

