 <?php
                    $args = array(
                        'post_type' => 'post',     // Тип записей: обычные посты
                        'posts_per_page' => -1     // -1 означает: вывести все посты
                    );

                    $query = new WP_Query($args);

                    if ($query->have_posts()) :
                        while ($query->have_posts()) : $query->the_post();
                    ?>
                            <div class="blog__item item-blog">
                                <div class="item-blog__title">
                                    <?php echo get_the_title(); ?>
                                </div>
                                <p class="item-blog__text">
                                    <?php echo get_the_excerpt(); ?>
                                </p>
                                <a href="<?php echo get_permalink(); ?>" class="item-blog__link">
                                    Читать полностью
                                </a>
                            </div>
                    <?php
                        endwhile;
                        wp_reset_postdata();
                    else :
                        echo 'Нет записей.';
                    endif;
                    ?>
                </ul>