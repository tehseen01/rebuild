import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, buttonVariants } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import CustomChip from '../shared/custom-chip';

const Hero = () => {
    return (
        <section className="h-dvh w-full">
            <div className="mx-auto grid gap-4 px-2 pt-10 sm:px-6 md:grid-cols-2 md:px-10">
                <div className="space-y-4 self-center">
                    <Link
                        href="https://twitter.com/tehseen_type"
                        className={cn(
                            buttonVariants({ variant: 'outline', size: 'sm' }),
                            'rounded-full bg-secondary px-4',
                        )}
                        target="_blank"
                    >
                        <span className="mr-3">🎉</span> The Ultimate Resume
                        Builder
                    </Link>
                    <h1 className="text-5xl font-extrabold tracking-tight md:text-[4rem] md:leading-[0.85]">
                        Build <CustomChip>ATS</CustomChip>-beating resume that
                        get you
                        <CustomChip>noticed</CustomChip>.
                    </h1>
                    <p className="mx-auto text-secondary-foreground md:text-xl">
                        Our resume builder makes it easy to craft a standout
                        resume that showcases your skills and experience.
                    </p>
                    <Button className="mt-6" size={'lg'}>
                        <Link
                            href="/builder"
                            className="flex items-center gap-2"
                        >
                            Create My Resume <ArrowRight size={20} />
                        </Link>
                    </Button>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src={'/images/hero.svg'}
                        width={500}
                        height={500}
                        alt="hero section"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
