'use client'
import { useState } from 'react'
import {
    useColorMode,
    Switch,
    Flex,
    Button,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import {useContext} from 'react'
import { AuthContext } from '../context/AuthProvider'

export const Chakraui = () => {
    const [display, changeDisplay] = useState('none')
    const {login , setLogin}  = useContext(AuthContext);
    console.log(login);
        return (
        <Flex>
            <Flex
                position="fixed"
                top="1rem"
                right="1rem"
                align="center"
            >

                {/* Desktop */}
                <Flex
                    display={['none', 'none', 'flex', 'flex']}
                >
                        <NextLink href="/" passHref>
                            <Button
                                as="a"
                                variant="ghost"
                                aria-label="Home"
                                my={5}
                                w="100%"
                            >
                                Home
                            </Button>
                        </NextLink>

                    <NextLink href="/blog" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="About"
                            my={5}
                            w="100%"
                        >
                            Blogs
                        </Button>
                    </NextLink>

                    <NextLink href="/Todo_Pages/todo" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Contact"
                            my={5}
                            w="100%"
                        >
                            Todo
                        </Button>
                    </NextLink>

                    <NextLink href="/product" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Contact"
                            my={5}
                            w="100%"
                        >
                            Product
                        </Button>
                    </NextLink>


                    <NextLink href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Contact"
                            my={5}
                            w="100%"
                        onClick={() => login ? setLogin(false) : setLogin(true)}>
                            {login ? 'Logout' : 'login'}
                        </Button>
                    </NextLink>
                </Flex>

                {/* Mobile */}
                <IconButton
                    aria-label="Open Menu"
                    size="lg"
                    mr={2}
                    icon={
                        <HamburgerIcon />
                    }
                    onClick={() => changeDisplay('flex')}
                    display={['flex', 'flex', 'none', 'none']}
                />
            </Flex>

            {/* Mobile Content */}
            <Flex
                w='100vw'
                display={display}
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
            >
                <Flex justify="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Open Menu"
                        size="lg"
                        icon={
                            <CloseIcon />
                        }
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>

                <Flex
                    flexDir="column"
                    align="center"
                >
                    <NextLink href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                        >
                            Home
                        </Button>
                    </NextLink>

                    <NextLink href="/blog" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="About"
                            my={5}
                            w="100%"
                        >
                            Blogs
                        </Button>
                    </NextLink>

                    <NextLink href="/Todo_Pages/todo" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Contact"
                            my={5}
                            w="100%"
                        >
                            Todo
                        </Button>
                    </NextLink>

                    <NextLink href="/product" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Contact"
                            my={5}
                            w="100%"
                        >
                           Product
                        </Button>
                    </NextLink>

                    <NextLink href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Contact"
                            my={5}
                            w="100%"
                        onClick={() => login ? setLogin(false) : setLogin(true)}>
                            {login ? 'Logout' : 'Login'}
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
        </Flex>
    )
}
