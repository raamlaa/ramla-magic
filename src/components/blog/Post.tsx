"use client";

import { Column, Flex, Heading, SmartLink, Tag, Text } from '@once-ui-system/core';
import Image from 'next/image';
import styles from './Posts.module.scss';
import { formatDate } from '@/utils/formatDate';

interface PostProps {
    post: any;
    thumbnail: boolean;
    direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
    // For posts with thumbnails, use the new card design
    if (thumbnail) {
        return (
            <SmartLink
                fillWidth
                unstyled
                style={{ borderRadius: 'var(--radius-l)' }}
                key={post.slug}
                href={`/blog/${post.slug}`}>
                <Column
                    position="relative"
                    transition="micro-medium"
                    radius="l"
                    className={styles.hover}
                    fillWidth
                    gap="l"
                    background="surface"
                    border="neutral-alpha-weak"
                    style={{ overflow: 'hidden', height: '100%', minHeight: 'auto' }}>
                    {post.metadata.image && (
                        <div style={{ 
                            position: 'relative', 
                            width: '100%', 
                            aspectRatio: '16 / 9',
                            overflow: 'hidden',
                            borderRadius: 'var(--radius-m-t)'
                        }}>
                            <Image
                                src={post.metadata.image}
                                alt={post.metadata.title || 'Blog post thumbnail'}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 640px"
                                priority
                            />
                        </div>
                    )}
                    <Column
                        fillWidth
                        gap="m"
                        paddingX="l"
                        paddingBottom="l"
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Column gap="s">
                            <Heading
                                as="h2"
                                variant="heading-strong-l"
                                wrap="balance"
                                style={{ 
                                    display: '-webkit-box',
                                    WebkitLineClamp: '2',
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                {post.metadata.title}
                            </Heading>
                            {post.metadata.summary && (
                                <Text
                                    variant="body-default-s"
                                    onBackground="neutral-weak"
                                    wrap="balance"
                                    style={{ 
                                        display: '-webkit-box',
                                        WebkitLineClamp: '3',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                    {post.metadata.summary}
                                </Text>
                            )}
                        </Column>
                        <Flex gap="s" vertical="center" horizontal="space-between" wrap>
                            {post.metadata.tag && (
                                <Tag
                                    label={post.metadata.tag}
                                    variant="neutral"
                                    size="s"/>
                            )}
                            <Text
                                variant="label-default-s"
                                onBackground="neutral-weak">
                                {formatDate(post.metadata.publishedAt, false)}
                            </Text>
                        </Flex>
                    </Column>
                </Column>
            </SmartLink>
        );
    }

    // For posts without thumbnails (grid view), use compact text-only design
    return (
        <SmartLink
            fillWidth
            unstyled
            style={{ borderRadius: 'var(--radius-l)' }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Column
                position="relative"
                transition="micro-medium"
                radius="l"
                className={styles.hover}
                fillWidth
                gap="m"
                background="surface"
                border="neutral-alpha-weak"
                padding="l">
                <Column gap="s">
                    <Heading
                        as="h2"
                        variant="heading-strong-m"
                        wrap="balance">
                        {post.metadata.title}
                    </Heading>
                    {post.metadata.summary && (
                        <Text
                            variant="body-default-s"
                            onBackground="neutral-weak"
                            wrap="balance">
                            {post.metadata.summary}
                        </Text>
                    )}
                </Column>
                <Flex gap="s" vertical="center" horizontal="space-between" wrap>
                    {post.metadata.tag && (
                        <Tag
                            label={post.metadata.tag}
                            variant="neutral"
                            size="s"/>
                    )}
                    <Text
                        variant="label-default-s"
                        onBackground="neutral-weak">
                        {formatDate(post.metadata.publishedAt, false)}
                    </Text>
                </Flex>
            </Column>
        </SmartLink>
    );
}